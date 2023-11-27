const TodoItem=({todo,onToggle,onRemove})=>{
  return(
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  )
}

const Todos=({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
})=>{
  const onSubmit=e=>{
    e.preventDefault()
  }
  return(
    
  )
}