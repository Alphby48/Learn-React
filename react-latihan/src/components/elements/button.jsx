const Button = (props) => {
  const { children, onClick, datatype } = props;
  return (
    <button
      className="btn btn-primary"
      onClick={() => onClick()}
      datatype={datatype}
    >
      {children}
    </button>
  );
};

export default Button;
