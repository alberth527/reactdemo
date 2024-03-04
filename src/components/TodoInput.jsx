
function TodoInput({onAdd, inputValue, setInputValue}) {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button className="button" onClick={onAdd}>Add Todo</button>
    </form>
  )
}

export default TodoInput