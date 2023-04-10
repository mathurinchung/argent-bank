import PropTypes from 'prop-types';

/**
 * A functional component that renders a feature item for a website.
 *
 * @param { String } icon - The URL of the icon to display for the feature.
 * @param { String } title - The title of the feature.
 * @param { String } content - The content to display for the feature.
 * @returns { JSX.Element } The JSX element for the feature item.
 */
function FeatureItem({ icon, title, content }) {
  return (
    <div className="feature-item">
      <img src={ icon } alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{ title }</h3>
      <p>{ content }</p>
    </div>
  );
}

FeatureItem.propTpes = {
  icon: PropTypes.string.isRequired,   // The URL of the icon to display for the feature.
  title: PropTypes.string.isRequired,  // The title of the feature.
  content: PropTypes.string.isRequired // The content to display for the feature.
};

export default FeatureItem;
