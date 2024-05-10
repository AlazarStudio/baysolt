import React from "react";
import classes from './Text.module.css';

function Text({ children, ...props }) {
    return (
        <>
            {/* <div className={classes.Text} style={{ */}
            <div style={{
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
            </div>
        </>
    );
}

export default Text;