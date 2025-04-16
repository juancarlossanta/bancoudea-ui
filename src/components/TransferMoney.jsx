import { useState } from "react";
import { transferMoney } from "../services/api";

function TransferMoney() {
  const [senderAccountNumber, setSenderAccountNumber] = useState("");
  const [receiverAccountNumber, setReceiverAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await transferMoney({ senderAccountNumber, receiverAccountNumber, amount });
    alert("Transferencia realizada con éxito");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Transferencia</h2>
      <input
        placeholder="Cuenta origen"
        value={senderAccountNumber}
        onChange={(e) => setSenderAccountNumber(e.target.value)}
      />
      <input
        placeholder="Cuenta destino"
        value={receiverAccountNumber}
        onChange={(e) => setReceiverAccountNumber(e.target.value)}
      />
      <input
        placeholder="Monto"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default TransferMoney;
