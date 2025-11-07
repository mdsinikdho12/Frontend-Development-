function getNextTodoId(todo) {
  if (todo.length === 0) {
    return 1;
  }
  const MaxId = todo.reduce((MaxId, todo) => Math.max(MaxId, todo.id), 0);
  return MaxId + 1;
}

export default getNextTodoId;
