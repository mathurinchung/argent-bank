function InputRemember({ input }) {
  return (
    <div className="input-remember">
      <input type={ input.type } id={ input.id } />
      <label htmlFor={ input.id }>{ input.label }</label>
    </div>
  );
}

export default InputRemember;
