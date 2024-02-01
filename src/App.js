import { useState } from "react";
import InputBill from "./components/InputBill";
import Percentage from "./components/Percentage";
import Result from "./components/Result";
import Button from "./components/Button";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = ((Number(percentage1) + Number(percentage2)) / 2) * bill;
  const total = bill + tip;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <InputBill bill={bill} setBill={setBill} />
      <Percentage
        question="How do you like the service?"
        percentage={percentage1}
        setPercentage={setPercentage1}
      />
      <Percentage
        question="How do your friend like the service?"
        percentage={percentage2}
        setPercentage={setPercentage2}
      />
      <Result bill={bill} tip={tip.toFixed(2)} total={total} />
      <Button onReset={handleReset} />
    </div>
  );
}

export default App;
