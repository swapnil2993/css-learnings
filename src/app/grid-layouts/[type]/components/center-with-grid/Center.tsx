import style from "./center.module.css";
const Center = () => {
  return (
    <>
      <p>Centering with Grid</p>
      <div className={style.container}>
        <div className={style.element} contentEditable>
          The place-items property is shorthand for justify-items (horizontal)
          and align-items (vertical)
        </div>
      </div>
    </>
  );
};

export default Center;
