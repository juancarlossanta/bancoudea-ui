import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerList from "./components/CustomerList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerList />} />
      </Routes>
    </Router>
  );
}

export default App;
