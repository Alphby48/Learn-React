import React from "react";
// penulisan component bisa dengan class
class Buttons extends React.Component {
  render() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-black text-white"
        type="submit"
      >
        Buy now
      </button>
    );
  }
}
// penulisan component bisa dengan function declaration
function ButtonBlack() {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-300 text-white"
      type="submit"
    >
      Sel now
    </button>
  );
}
// penulisan component bisa dengan function expressins + arrow functions
const ButtonBlue = (props) => {
  const { variant = "bg-slate-500", children = "..." } = props; // sabagai nilai default jika tidak memakai props
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-200 min-h-screen items-center">
      <div className="flex gap-x-3">
        <ButtonBlue variant="bg-red-400">login</ButtonBlue>
        <ButtonBlue variant="bg-blue-400">logout</ButtonBlue>
        <ButtonBlue variant="bg-green-400">sign-up</ButtonBlue>
        <ButtonBlue variant="bg-slate-400">get-started</ButtonBlue>
        <ButtonBlue />
      </div>
    </div>
  );
}

export default App;
