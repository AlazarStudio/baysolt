import React from "react";
import classes from "./Benefit.module.css";

function Benefit({ children, ...props }) {
  return (
    <>
      <div className={classes.benefit_item}>
        <div className={classes.benefit_item__img}>
          {/* <img src={props.img} alt="" /> */}
          <img src={"admin/img/f1.jpg"} alt="" />
        </div>
        <div className={classes.benefit_item__title}>Lorem ipsum</div>
        <div className={classes.benefit_item__desc}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        </div>
      </div>

      <div className={classes.benefit_item}>
        <div className={classes.benefit_item__img}>
          {/* <img src={props.img} alt="" /> */}
          <img src={"admin/img/f1.jpg"} alt="" />
        </div>
        <div className={classes.benefit_item__title}>Lorem ipsum</div>
        <div className={classes.benefit_item__desc}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        </div>
      </div>

      <div className={classes.benefit_item}>
        <div className={classes.benefit_item__img}>
          {/* <img src={props.img} alt="" /> */}
          <img src={"admin/img/f1.jpg"} alt="" />
        </div>
        <div className={classes.benefit_item__title}>Lorem ipsum</div>
        <div className={classes.benefit_item__desc}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        </div>
      </div>
    </>
  );
}

export default Benefit;
