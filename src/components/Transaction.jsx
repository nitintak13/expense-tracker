import { useContext } from "react";
import Cards from "./Cards";

import { GlobalContext } from "../context/GlobalState";

export const Transaction = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Cards key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
