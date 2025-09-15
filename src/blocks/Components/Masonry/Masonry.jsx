/*
	Installed from https://reactbits.dev/default/
*/

import {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import {gsap} from "gsap";

import "./Masonry.css";
import {useNavigate} from "react-router-dom";

const useMedia = (queries, values, defaultValue) => {
    const get = () =>
        values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

    const [value, setValue] = useState(get);

    useEffect(() => {
        const handler = () => setValue(get);
        queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
        return () =>
            queries.forEach((q) =>
                matchMedia(q).removeEventListener("change", handler),
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queries]);

    return value;
};

const useMeasure = () => {
    const ref = useRef(null);
    const [size, setSize] = useState({width: 0, height: 0});

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const {width, height} = entry.contentRect;
            setSize({width, height});
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size];
};

const preloadImages = async (urls) => {
    await Promise.all(
        urls.map(
            (src) =>
                new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = img.onerror = () => resolve();
                }),
        ),
    );
};

const Masonry = ({
                     items,
                     ease = "power3.out",
                     duration = 0.6,
                     stagger = 0.05,
                     animateFrom = "bottom",
                     scaleOnHover = true,
                     hoverScale = 0.95,
                     blurToFocus = true,
                     colorShiftOnHover = false,
                 }) => {
    const columns = useMedia(
        [
            "(min-width:1500px)",
            "(min-width:1000px)",
            "(min-width:600px)",
            "(min-width:400px)",
        ],
        [5, 4, 3, 2],
        1,
    );

    const [containerRef, {width}] = useMeasure();
    const [imagesReady, setImagesReady] = useState(false);

    const getInitialPosition = (item) => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return {x: item.x, y: item.y};

        let direction = animateFrom;

        if (animateFrom === "random") {
            const directions = ["top", "bottom", "left", "right"];
            direction = directions[Math.floor(Math.random() * directions.length)];
        }

        switch (direction) {
            case "top":
                return {x: item.x, y: -200};
            case "bottom":
                return {x: item.x, y: window.innerHeight + 200};
            case "left":
                return {x: -200, y: item.y};
            case "right":
                return {x: window.innerWidth + 200, y: item.y};
            case "center":
                return {
                    x: containerRect.width / 2 - item.w / 2,
                    y: containerRect.height / 2 - item.h / 2,
                };
            default:
                return {x: item.x, y: item.y + 100};
        }
    };

    useEffect(() => {
        preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
    }, [items]);

    const grid = useMemo(() => {
        if (!width) return [];

        const colHeights = new Array(columns).fill(0);
        const columnWidth = width / columns;

        return items.map((child) => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = columnWidth * col;
            const height = child.height / 2;
            const y = colHeights[col];

            colHeights[col] += height;

            return {...child, x, y, w: columnWidth, h: height};
        });
    }, [columns, items, width]);

    const hasMounted = useRef(false);

    useLayoutEffect(() => {
        if (!imagesReady) return;

        grid.forEach((item, index) => {
            const selector = `[data-key="${item.id}"]`;
            const animationProps = {
                x: item.x,
                y: item.y,
                width: item.w,
                height: item.h,
            };

            if (!hasMounted.current) {
                const initialPos = getInitialPosition(item, index);
                const initialState = {
                    opacity: 0,
                    x: initialPos.x,
                    y: initialPos.y,
                    width: item.w,
                    height: item.h,
                    ...(blurToFocus && {filter: "blur(10px)"}),

                };

                gsap.fromTo(selector, initialState, {
                    opacity: 1,
                    ...animationProps,
                    ...(blurToFocus && {filter: "blur(0px)"}),
                    duration: 0.8,
                    ease: "power3.out",
                    delay: index * stagger,
                });
            } else {
                gsap.to(selector, {
                    ...animationProps,
                    duration: duration,
                    ease: ease,
                    overwrite: "auto",
                });
            }
        });

        hasMounted.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

    const handleMouseEnter = (e, item) => {
        const imgElement = e.currentTarget.querySelector(".item-img");

        if (scaleOnHover) {
            gsap.to(e.currentTarget, {
                scale: hoverScale,
                duration: 0.3,
                ease: "power2.out",
            });
        }

        if (colorShiftOnHover && item.bw !== false && imgElement) {
            gsap.to(imgElement, {
                filter: "grayscale(0%)",
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };


    const handleMouseLeave = (e, item) => {
        const imgElement = e.currentTarget.querySelector(".item-img");

        if (scaleOnHover) {
            gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }

        if (colorShiftOnHover && item.bw !== false && imgElement) {
            gsap.to(imgElement, {
                filter: "grayscale(100%)",
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };
    const navigate = useNavigate();

    const handleClick = (item) => {
        if (!item.url) return;

        if (item.url.startsWith("http")) {
            // external link
            window.open(item.url, "_blank", "noopener");
        } else {
            // internal navigation with exit animation
            exitAnimation(item.url);
        }
    };

    const exitAnimation = (url) => {
        return new Promise((resolve) => {
            if (!grid || grid.length === 0) {
                resolve();
                navigate(url);
                return;
            }

            const exitDuration = 1;   // duration of each item animation
            const exitStagger = 0.2;  // time between items
            const exitEase = "power3.inOut";

            grid.forEach((item, index) => {
                const selector = `[data-key="${item.id}"]`;
                const initialPos = getInitialPosition(item);

                gsap.to(selector, {
                    opacity: 0,
                    x: initialPos.x,
                    y: initialPos.y,
                    width: item.w,
                    height: item.h,
                    duration: exitDuration,
                    ease: exitEase,
                    delay: (grid.length - 1 - index) * exitStagger, // reverse stagger
                    onComplete: () => {
                        // resolve when the **last item finishes**
                        if (index === 0) resolve();
                    },
                });
            });
        }).then(() => navigate(url));
    };




    return (
        <div ref={containerRef} className="list">
            {grid.map((item) => {
                return (
                    <div
                        key={item.id}
                        data-key={item.id}
                        className={`item-wrapper ${item.url ? "clickable" : "disabled"}`}
                        style={{cursor: item.url ? "pointer" : "default"}}
                        onClick={() => handleClick(item)}  // updated

                        onMouseEnter={(e) => handleMouseEnter(e, item)}
                        onMouseLeave={(e) => handleMouseLeave(e, item)}
                    >

                        <div
                            className="item-img"
                            style={{
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: item.position || "center",
                                backgroundRepeat: "no-repeat",
                                filter: item.bw !== false ? "grayscale(100%)" : "none",
                                position: "relative",
                            }}
                        >
                            {item.title && (
                                <div
                                    style={{
                                        position: "absolute",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        fontWeight: "900",
                                        textShadow: "0 0 8px rgba(0,0,0,0.8), 0 0 5px rgba(255,255,255,0.2)",
                                        backgroundColor: "rgba(0,0,0,0.1)",
                                        padding: "4px 10px",
                                        borderRadius: "6px",
                                        pointerEvents: "none",
                                        transition: "transform 0.3s ease, text-shadow 0.3s ease",
                                        ...item.titlePosition,
                                    }}

                                >
                                    {item.title}
                                </div>
                            )}
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default Masonry;
