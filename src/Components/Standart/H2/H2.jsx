import React from "react";
import classes from './H2.module.css';

function H2({ children, ...props }) {
    return (
        <>
            <h2 style={{
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
                color: props.color,
            }}>
                {children}
            </h2>
        </>
    );
}

export default H2;