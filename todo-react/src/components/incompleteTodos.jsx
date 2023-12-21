
export const IncompleteTodos = (props) => {

  const {todos,onClickComplete,onClickdelete} = props;

  return(
    <div className='incomplete-area'>
    <p className='title'>未完了のTODO</p>
    <ul>
      {todos.map((todo,index) => {
        return (
          <li key={todo}>
          <div className='list-row'>
            <p className='todo-items'>{todo}</p>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickdelete(index)}>削除</button>
          </div>
        </li>
        );
      })}
    </ul>
  </div>
  );
};