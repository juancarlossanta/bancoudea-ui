import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import TransferMoney from "./components/TransferMoney";
import TransactionsForAccount from "./components/TransactionsForAccount";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Clientes</Link>
        <span> | </span>
        <Link to="/transferencia">Transferencia</Link>
        <span> | </span>
        <Link to="/historial">Historial</Link>
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
