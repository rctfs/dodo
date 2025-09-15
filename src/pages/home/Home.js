import React from "react";
import Category from "../../components/category/Category";
import "./Home.css";
import CircularGallery from "../../blocks/Components/CircularGallery/CircularGallery";
import Masonry from "../../blocks/Components/Masonry/Masonry";
import items from "./HomeItems.js";
function Home() {

    return (
        <div>
        <div className="rectangle">
            {/*<div className="photosOnTop" style={{gridArea: "1 / 1 / 3 / 13"}}>*/}
            {/*    <CircularGallery*/}
            {/*        bend={0}*/}
            {/*        textColor="#ffffff"*/}
            {/*        borderRadius={0.05}*/}
            {/*        scrollEase={1}*/}
            {/*        scrollSpeed={2}*/}
            {/*        style={{top: 0, left: 0, width: "100%"}}*/}
            {/*    />*/}
            {/*</div>*/}
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

                />            </div>
        </div>
        </div>
    );
}

export default Home;
