const ButtonBlue = (props) => {
  const {
    classname = "bg-slate-500",
    children = "...",
    onClick = () => {},
    type = "button",
  } = props; // sabagai nilai default jika tidak memakai props
  return (
    <button
      className={`py-2 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default ButtonBlue;
