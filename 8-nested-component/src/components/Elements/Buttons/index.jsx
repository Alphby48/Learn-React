const ButtonBlue = (props) => {
  const { classname = "bg-slate-500", children = "..." } = props; // sabagai nilai default jika tidak memakai props
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default ButtonBlue;
