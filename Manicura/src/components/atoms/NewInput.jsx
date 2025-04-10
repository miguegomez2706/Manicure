const NewInput = (props) => {
  return (
    <div className="border border-gray-400 rounded-md p-2">
      <input type={props.type} placeholder={props.name} />
    </div>
  );
};

export default NewInput;
