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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10"
    >
      <h2 className="text-xl font-bold text-institucional mb-4">
        Transferencia de Fondos
      </h2>
      <div className="mb-4">
        <label className="block mb-1">Cuenta Origen</label>
        <input
          className="w-full border border-gray-300 p-2 rounded"
          value={senderAccountNumber}
          onChange={(e) => setSenderAccountNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Cuenta Destino</label>
        <input
          className="w-full border border-gray-300 p-2 rounded"
          value={receiverAccountNumber}
          onChange={(e) => setReceiverAccountNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Monto</label>
        <input
          type="number"
          className="w-full border border-gray-300 p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-institucional text-white px-4 py-2 rounded hover:bg-green-900"
      >
        Realizar transferencia
      </button>
    </form>
  );
}

export default TransferMoney;
