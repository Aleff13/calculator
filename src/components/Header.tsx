interface HeaderProps {
  tempVal: string;
  currentVal: string;
}

export const Header = ({ tempVal, currentVal }: HeaderProps) => {
  return (
    <>
      <h1>Calculator</h1>

      {currentVal && !tempVal && <h3>{`${currentVal}`}</h3>}
      {tempVal && <h3>{`${tempVal}`}</h3>}
    </>
  );
};
