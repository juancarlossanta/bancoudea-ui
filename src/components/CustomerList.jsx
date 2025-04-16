import { useEffect, useState } from "react";
import { getCustomers } from "../services/api";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then((res) => setCustomers(res.data));
  }, []);

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {customers.map((cliente) => (
          <li key={cliente.id}>
            Nombre completo: {cliente.firstName} {cliente.lastName} - Número de
            cuenta: {cliente.accountNumber} - Saldo: ${cliente.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
