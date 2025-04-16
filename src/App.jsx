import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import TransferMoney from "./components/TransferMoney";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Clientes</Link>
        <span> | </span>
        <Link to="/transferencia">Transferencia</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/transferencia" element={<TransferMoney />} />
      </Routes>
    </Router>
  );
}

export default App;
