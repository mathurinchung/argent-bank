function InputWrapper({ input, change }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={ input.id }>{ input.label }</label>
      <input type={ input.type } id={ input.id } onChange={ change } />
    </div>
  );
}

export default InputWrapper;
