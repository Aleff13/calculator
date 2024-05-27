import { values } from "../shared/values";

interface CalculatorProps {
  resetAll: () => void;
  handleValue: (value: any) => void;
  calculate: () => void;
}

export const Calculator = ({
  resetAll,
  handleValue,
  calculate,
}: CalculatorProps) => {
  return (
    <>
      <div className="row">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            padding: "10px",
          }}
        >
          {values.map((value) => (
            <input
              id="greet-input"
              type="button"
              value={value}
              style={{ color: "whitesmoke" }}
              onClick={(event: any) => handleValue(event.target.value)}
            />
          ))}
          <input
            id="greet-input"
            type="button"
            value="AC"
            style={{ color: "whitesmoke" }}
            onClick={resetAll}
          />

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
};
