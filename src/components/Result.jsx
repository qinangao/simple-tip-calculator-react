export default function Result({ bill, tip, total }) {
  return (
    <div className="result">
      <strong>
        You pay${total}(${bill}+${tip} tip)
      </strong>
    </div>
  );
}
