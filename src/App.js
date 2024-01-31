import { useState } from "react";
import InputBill from "./components/InputBill";
import Percentage from "./components/Percentage";
import Result from "./components/Result";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  return (
    <div>
      <InputBill bill={bill} setBill={setBill} />
      <Percentage
        question="How do you like the service?"
        percentage={percentage1}
      />
      <Percentage
        question="How do your friend like the service?"
        percentage={percentage2}
      />
      <Result bill={bill} />
    </div>
  );
}

export default App;
