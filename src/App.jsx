import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import TransferMoney from "./components/TransferMoney";
import TransactionsForAccount from "./components/TransactionsForAccount";

function App() {
  return (
    <Router>
      <nav className="bg-institucional p-4 text-white flex gap-4">
        <Link to="/" className="hover:underline">
          Clientes
        </Link>
        <Link to="/transferencia" className="hover:underline">
          Transferencia
        </Link>
        <Link to="/historial" className="hover:underline">
          Historial
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/transferencia" element={<TransferMoney />} />
        <Route path="/historial" element={<TransactionsForAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
