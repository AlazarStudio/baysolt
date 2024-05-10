import React from "react";
import classes from './RowBlock.module.css';

function RowBlock({ children, ...props }) {
    return ( 
        <>
            <div className={classes.RowBlock} style={{
                width: props.width,
                height: props.height,
                padding: props.padding,
                gap: props.gap,
                justifyContent: props.justifyContent,
                alignItems: props.alignItems,
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