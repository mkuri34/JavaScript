const style = {
  backgroundColor: "#f5bfe9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin:"4px",
  borderRadius:"8px",
};

export const InputTodo = (props)=>{

  const {todoText,onChange,onClick,diabled} = props;
  return(
    <div style={style}>
      <input
        type="text"
        placeholder='TODOを入力'
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};