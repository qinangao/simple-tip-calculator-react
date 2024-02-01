export default function Button({ onReset }) {
  return (
    <button className="btn" onClick={onReset}>
      Reset
    </button>
  );
}
