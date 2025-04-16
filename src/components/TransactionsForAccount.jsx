import { useState } from "react";
import { getTransactionsForAccount } from "../services/api";

function TransactionsForAccount() {
  const [accountNumber, setAccountNumber] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleSearch = async () => {
    const res = await getTransactionsForAccount(accountNumber);
    setTransactions(res.data);
  };

  return (
    <div>
      <h2>Historial de Transacciones</h2>
      <input
        placeholder="Número de cuenta"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.timestamp}</td>
              <td>${tx.amount}</td>
              <td>
                {tx.senderAccountNumber === accountNumber
                  ? "Salida"
                  : "Entrada"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsForAccount;
