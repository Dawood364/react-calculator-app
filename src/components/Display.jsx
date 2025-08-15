import styles from "./Display.module.css";
const Display = ({ calval }) => {
  return (
    <>
      <div className={styles.containerinput}>
        <div>
          <input type="text" className={styles.input} value={calval} readOnly />
        </div>
      </div>
    </>
  );
};

export default Display;
