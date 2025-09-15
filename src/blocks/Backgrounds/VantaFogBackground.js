import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function VantaFogBackground({ children }) {
    const [vantaEffect, setVantaEffect] = useState(null);
    const fogRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                FOG({
                    el: fogRef.current,
                    THREE,
                    backgroundAlpha: 1,
                    baseColor: 0xffffff,
                    midtoneColor: 0x4199be,
                    lowlightColor: 0x4242a0,
                    highlightColor: 0x4aff,
                    blurFactor: 0.6,
                    speed: 1,
                    scale: 2,
                    scaleMobile: 4,
                    mouseControls: true,
                    touchControls: false,
                    gyroControls: false,
                    zoom: 1,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            {/* fullscreen fog */}
            <div
                ref={fogRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0,
                }}
            />
            {/* children on top */}
            <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
                {children}
            </div>
        </div>
    );
}
