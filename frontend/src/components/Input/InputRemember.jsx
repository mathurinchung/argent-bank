import PropTypes from 'prop-types';

/**
 * Component for rendering an input field with a label and PropTypes validation for the input object
 *
 * @param { Object } input - Object containing the input properties such as type, id and label
 * @param { Function } change - Callback function to be executed when the input field value is changed
 * @returns { JSX.Element } - Rendered React element
 */
function InputRemember({ input, change }) {
  return (
    <div className="input-remember">
      <input type={ input.type } id={ input.id } onChange={ change } />
      <label htmlFor={ input.id }>{ input.label }</label>
    </div>
  );
}

InputRemember.propTypes = {
  input: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired
};

export default InputRemember;
