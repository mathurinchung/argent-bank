import PropTypes from 'prop-types';
import { formatNumber } from '@/utils';

/**
 * A functional component that renders an account section.
 *
 * @param { Object } account - An object representing the account.
 * @param { String } account.title - The title of the account.
 * @param { Number } account.amount - The amount of money in the account.
 * @param { String } account.description - The description of the account.
 * @returns { JSX.Element } The JSX element for the account section.
*/
function AccountSection({ account }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{ account.title }</h3>
        <p className="account-amount">{ '$' + formatNumber(account.amount) }</p>
        <p className="account-amount-description">{ account.description }</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

AccountSection.propTypes = {
  // An object representing the account.
  account: PropTypes.shape({
    title: PropTypes.string.isRequired,      // The title of the account.
    amount: PropTypes.string.isRequired,     // The amount of money in the account.
    description: PropTypes.string.isRequired // The description of the account.
  }).isRequired
};

export default AccountSection;
