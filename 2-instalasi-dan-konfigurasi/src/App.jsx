import { useState } from "react";

function ButtonUI({ parm, onClick }) {
  return <button onClick={onClick}>{parm}</button>;
}

function UITampil({ val }) {
  return <h1>{val}</h1>;
}

function HomePage() {
  const [nilai, setNilai] = useState(0);
  function tambah() {
    setNilai(nilai + 1);
  }
  function kurang() {
    setNilai(nilai - 1);
  }
  function reset() {
    setNilai(0);
  }

  return (
    <>
      <ButtonUI parm="+" onClick={tambah} />
      <UITampil val={nilai} />
      <ButtonUI parm="-" onClick={kurang} />
      <ButtonUI parm="Reset" onClick={reset} />
    </>
  );
}

export default HomePage;
