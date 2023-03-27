import { Main } from "../components/Layout";
import { AccountSection } from "../components/Account";
import accounts from '../__mocks__/accounts.json';

function User() {
  return (
    <Main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      { accounts.map((account, index) => <AccountSection key={ index } account={ account } />) }
    </Main>
  );
}

export default User;