import classes from "./MealsInfo.module.css";
const MealsInfo = () => {
  return (
    <>
      <section className={classes.info}>
        <h2>Title of the food</h2>
        <p>
          A little longer text with the meal description in details. And some
          more text
        </p>
        <p>
          Another description about how good the food is and how you should
          definitely order etc. etc.
        </p>
      </section>
    </>
  );
};
export default MealsInfo;
