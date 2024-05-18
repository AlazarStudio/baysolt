import React from "react";
import classes from "./Request.module.css";
import ContactFormSmall from "../../Standart/ContactFormSmall/ContactFormSmall";

function Request({ children, ...props }) {
  return (
    <>
      <div className={classes.request_block}>

        <div className={classes.request}>
          <div className={classes.request_title}>Оставить заявку</div>
          <div className={classes.request_desc}>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          </div>
        </div>

        <div className={classes.request_form}>
          <ContactFormSmall />
        </div>

      </div>
    </>
  );
}

export default Request;
