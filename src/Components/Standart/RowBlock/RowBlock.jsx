import React from "react";
import classNames from 'classnames';
import classes from './RowBlock.module.css';

function RowBlock({ children, className, ...props }) {
    return (
        <>
            <div {...props} className={classNames(classes.RowBlock, className)} style={{
                width: props.width,
                height: props.height,
                padding: props.padding,
                gap: props.gap,
                justifyContent: props.justifyContent,
                alignItems: props.alignItems,
                boxShadow: props.boxShadow,
                border: props.border,
                borderRadius: props.borderRadius,
                backgroundColor: props.backgroundColor,
                backgroundImage: `url(${props.backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                {children}
            </div>
        </>
    );
}

export default RowBlock; 