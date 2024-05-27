import { evaluate } from "mathjs";
import { useEffect, useState } from "react";
import { values } from "../shared/values";

const useCalc = () => {
  const [currentVal, setCurrentVal] = useState(" ");
  const [tempVal, setTempVal] = useState(" ");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const resetTemp = () => {
    setTempVal("");
  };

  const resetCurrent = () => {
    setCurrentVal(" ");
  };

  const resetAll = () => {
    resetCurrent();
    resetTemp();
  };

  const handleValue = (value: any) => {
    setTempVal((prevTempVal) => prevTempVal + value);
  };

  const evaluateExpression = () => {
    return evaluate(tempVal.replace("x", "*"));
  };

  const calculate = () => {
    if (tempVal === "") return;
    const newNumber = evaluateExpression();
    setCurrentVal(newNumber);
    resetTemp();
  };

  const handleKeyPress = (event: any) => {
    const { key } = event;
    if (values.includes(key)) {
      setTempVal((temp) => temp + key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Escape") {
      resetAll();
    }
  };

  return {
    values: {
      currentVal,
      tempVal,
    },
    resetAll,
    calculate,
    handleValue,
  };
};

export default useCalc;
