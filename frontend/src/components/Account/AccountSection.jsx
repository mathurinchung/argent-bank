import PropTypes from 'prop-types';
import { formatNumber } from '@/utils';

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
  account: PropTypes.object.isRequired
};

export default AccountSection;
