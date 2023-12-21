
const onClickAdd = () =>{
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // テキストボックスの初期化
  document.getElementById("add-text").value ="";

  createIncompletelist(inputText);
}

// 渡された引数をもとに未完了のTODOを作成する関数を作成
const createIncompletelist = (todo) => {
  // liタグの生成
  const li = document.createElement("li");

  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグの生成
  const p = document.createElement("p");
  p.className = "todo-items";
  p.innerText = todo;

  // 完了buttonタグの生成
  const completeButton = document.createElement("button")
  completeButton.innerText = "完了";
  completeButton.addEventListener("click",() => {
    // 押下された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click",() =>{
      const todoText = returnButton.previousElementSibling.innerText;
      createIncompletelist(todoText);
      returnButton.closest("li").remove();
    })

    moveTarget.firstElementChild.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(moveTarget);
  });
  
  // 削除buttonタグの生成
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click",() => {
    // 押された削除ボタンの親にあるliタグを未完了リストから削除
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リスト(ul)に追加する
  document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click",onClickAdd);