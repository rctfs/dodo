import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

function Category({ name, backText, link = "/", cols = 1, rows = 1, style }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <div
            className="category-container"
            style={{
                gridColumn: `span ${cols}`,
                gridRow: `span ${rows}`,
                ...style
            }}
        >
            <div className="category-flip">
                <div className="category-front">{name}</div>
                <div
                    className="category-back"
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                >
                    {backText}
                </div>
            </div>
        </div>
    );
}

export default Category;
