import PropTypes from 'prop-types';

/**
 * A component for rendering the main content of a web page
 *
 * @param { String } className - An optional class name for the main element
 * @param { React.ReactNode } children - The child elements to be rendered inside the main element
 * @returns { JSX.Element } - A rendered React element
 */
function Main({ className, children }) {
  return (
    <main id="Main" className={ className }>
      { children }
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Main;
