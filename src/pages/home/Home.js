import React from "react";
import "./Home.css";
import Masonry from "../../blocks/Components/Masonry/Masonry";
import items from "./HomeItems.js";

function Home() {

    return (
        <div>
            <div className="rectangle">
                <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}}>
                    <Masonry
                        items={items}
                        ease="elastic.out"
                        duration={0.15}
                        stagger={0.25}
                        animateFrom="bottom"
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={true}

                    /></div>
            </div>
        </div>
    );
}

export default Home;
