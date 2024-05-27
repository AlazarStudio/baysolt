import React from "react";
import classNames from 'classnames';
import classes from './CenterBlock.module.css';

function CenterBlock({ children, className, ...props }) {
    return ( 
        <>
            <div {...props} className={classNames(classes.CenterBlock, className)} style={{
                width: props.width,
                height: props.height,
                gap: props.gap,
                background: `url(${props.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: props.margin,
                padding: props.padding,
            }}>
                {children}
            </div>
        </>
     );
}

export default CenterBlock;