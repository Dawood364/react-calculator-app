import styles from "./App.module.css";
import "./index.css";
import Display from "./components/Display";
import Button_Container from "./components/Button_Container";
import { useState } from "react";

function App() {
  let [calval, setcalval] = useState("");
  const ShowText = (Text) => {
    if (Text === "C") {
      setcalval(" ");
    } else if (Text === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      let newvalue = calval + Text;
      setcalval(newvalue);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Display calval={calval} />
        <Button_Container onclickButton={ShowText} />
      </div>
    </>
  );
}

export default App;
