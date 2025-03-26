import Header from "./components/Header";
import { Balance } from "./components/Balance";
import Expenses from "./components/Expenses";
import { Transaction } from "./components/Transaction";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <Transaction />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
