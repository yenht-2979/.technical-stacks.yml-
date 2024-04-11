export function checkDone(state, id) {
  const index = state.todoList.findIndex((item) => item.id == id);
  console.log(state.todoList[index]);
  state.todoList[index].checked = !state.todoList[index].checked;
}

export function addTodo(state) {
  if (state.todoSeleted.name) {
    const objTodo = {
      id: Date.now(),
      name: state.todoSeleted.name,
      checked: false,
      isEdit: false,
    };
    state.todoSeleted.name = "";

    state.todoList.push(objTodo);
  } else {
    alert("nhap ten de");
  }
}

export function deteleTodolist(state, id) {
  const index = state.todoList.findIndex((item) => item.id == id);

  state.todoList.splice(index, 1);
}

export function editTodolist(state, id) {
  const index = state.todoList.findIndex((item) => item.id == id);
  state.todoList[index].isEdit = !state.todoList[index].isEdit;
}

export function updateTodolist(state, id) {
  const index = state.todoList.findIndex((item) => item.id == id);

  if (state.todoList[index].name) {
    state.todoList[index].isEdit = false;
  } else {
    alert("ko duoc de trong");
  }
}
