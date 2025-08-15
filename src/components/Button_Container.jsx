import React from "react";
import styles from "./Button_Container.module.css";

const Button_Container = ({ onclickButton }) => {
  let calculator_items = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {calculator_items.map((item) => (
        <button className={styles.btn} onClick={() => onclickButton(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button_Container;
