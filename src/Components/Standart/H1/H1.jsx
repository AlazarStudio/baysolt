import React from "react";
import classes from './H1.module.css';

function H1({ children, ...props }) {
    return (
        <>
            <h1 style={{
                fontFamily: props.font_family,
                fontSize: props.fontSize,
                fontWeight: props.fontWeight,
                textAlign: props.textAlign,
                lineHeight: props.lineHeight,
                letterSpacing: props.letterSpacing,
                width: props.width,
                height: props.height,
                padding: props.padding,
                margin: props.margin,
                display: props.display,
            }}>
                {children}
            </h1>
        </>
    );
}

export default H1;