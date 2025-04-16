import { useState } from "react";
import { getTransactionsForAccount } from "../services/api";

function TransactionsForAccount() {
  const [accountNumber, setAccountNumber] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await getTransactionsForAccount(accountNumber);
      setTransactions(res.data);
    } catch (error) {
      alert("Error al obtener historial. \n" + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-institucional mb-6">
        Historial de Transacciones
      </h2>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Ingrese número de cuenta"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-institucional text-white px-4 py-2 rounded hover:bg-green-900"
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {transactions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-institucional text-white">
              <tr>
                <th className="p-2 text-left">Fecha</th>
                <th className="p-2 text-left">Monto</th>
                <th className="p-2 text-left">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border-t border-gray-200">
                    {tx.timestamp}
                  </td>
                  <td className="p-2 border-t border-gray-200">${tx.amount}</td>
                  <td className="p-2 border-t border-gray-200 capitalize">
                    {tx.senderAccountNumber === accountNumber
                      ? "Salida"
                      : "Ingreso"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && (
          <p className="text-gray-600 mt-4">
            No se encontraron transacciones para esta cuenta.
          </p>
        )
      )}
    </div>
  );
}

export default TransactionsForAccount;
