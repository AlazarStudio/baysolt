import React from "react";
import classNames from 'classnames';
import classes from './WidthBlock.module.css';

function WidthBlock({ children, className, ...props }) {
    return (
        <>
            <div {...props} className={classNames(classes.WidthBlock, className)} style={{
                width: props.width,
                height: props.height,
                padding: props.padding,
                flexDirection: props.flexDirection,
                gap: props.gap,
                backgroundColor: props.backgroundColor,
                backgroundImage: `url(${props.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                justifyContent: props.justifyContent,
                alignItems: props.alignItems,
                borderRadius: props.borderRadius
            }}>
                {children}
            </div>
        </>
    );
}

export default WidthBlock;