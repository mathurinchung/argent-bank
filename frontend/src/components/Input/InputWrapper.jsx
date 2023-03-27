function InputWrapper({ input }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={ input.id }>{ input.label }</label>
      <input type={ input.type } id={ input.id } />
    </div>
  );
}

export default InputWrapper;
