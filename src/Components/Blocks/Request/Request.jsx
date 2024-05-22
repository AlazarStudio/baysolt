import React from "react";
import classes from "./Request.module.css";
import ContactFormSmall from "../../Standart/ContactFormSmall/ContactFormSmall";

function Request({ children, ...props }) {
  return (
    <>
      <div className={classes.request_block}>

        <div className={classes.request}>
          {/* <div className={classes.request_title}>Оставить заявку</div>
          <div className={classes.request_desc}>
            asdf
          </div> */}
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0c940d7b9467e484242384e180fbe55a5795fbf6ed55fdc160bec75a2aa3d02d&amp;source=constructor" width="630" height="100%" frameborder="0"></iframe>
        </div>

        <div className={classes.request_form}>
          <ContactFormSmall />
        </div>

      </div>
    </>
  );
}

export default Request;
