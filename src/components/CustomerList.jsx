import { useEffect, useState } from "react";
import { getCustomers } from "../services/api";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then((res) => setCustomers(res.data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-institucional mb-4">Clientes</h2>
      <ul className="space-y-3">
        {customers.map((cliente) => (
          <li
            key={cliente.id}
            className="bg-white shadow border border-gray-200 p-4 rounded hover:shadow-md transition"
          >
            {/* Nombre completo: {cliente.firstName} {cliente.lastName} - Número de
            cuenta: {cliente.accountNumber} - Saldo: ${cliente.balance} */}
            <p className="font-semibold">
              {cliente.firstName} {cliente.lastName}
            </p>
            <p className="text-sm text-gray-600">
              Cuenta: {cliente.accountNumber}
            </p>
            <p className="text-sm text-gray-600">Saldo: {cliente.balance}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
