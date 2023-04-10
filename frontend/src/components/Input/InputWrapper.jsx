import PropTypes from 'prop-types';

/**
 * A component for rendering an input field with a label and PropTypes validation for the input and change props
 *
 * @param { Object } input - An object containing the properties for the input element such as type, id, and label
 * @param { Function } change - A callback function to be executed when the value of the input field changes
 * @returns { JSX.Element } - A rendered React element
 */
function InputWrapper({ input, change }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={ input.id }>{ input.label }</label>
      <input type={ input.type } id={ input.id } onChange={ change } />
    </div>
  );
}

InputWrapper.propTypes = {
  input: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  change: PropTypes.func.isRequired
};

export default InputWrapper;
