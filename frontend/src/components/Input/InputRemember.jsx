import PropTypes from 'prop-types';

function InputRemember({ input, change }) {
  return (
    <div className="input-remember">
      <input type={ input.type } id={ input.id } onChange={ change } />
      <label htmlFor={ input.id }>{ input.label }</label>
    </div>
  );
}

InputRemember.propTypes = {
  input: PropTypes.object.isRequired
};

export default InputRemember;
