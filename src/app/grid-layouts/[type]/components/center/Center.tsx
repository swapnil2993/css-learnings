import style from "./center.module.css";
const Center = () => {
  return (
    <>
      <p>Centering with Flexbox</p>
      <div className={style.container}>
        <div className={style.element} contentEditable>
          As expected, we begin with <b>display: flex;</b> which allows us to
          use Flexbox in CSS. We then used both the justify-content (horizontal
          alignment) and align-items (vertical alignment) properties to position
          the circle at the center of the page.
        </div>
      </div>
    </>
  );
};

export default Center;
