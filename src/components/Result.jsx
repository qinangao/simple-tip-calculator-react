export default function Result({ bill, tip }) {
  return (
    <div className="result">
      <strong>
        You pay${bill}(${bill}+${tip} tip)
      </strong>
    </div>
  );
}
