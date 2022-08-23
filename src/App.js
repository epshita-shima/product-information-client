import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from "react-router-dom";
import ItemInfoCreate from './Pages/ItemInfoCreate';
function App() {
  return (
    <div className="bg-gray-100">
      <Header></Header>
      <Routes>
        <Route path='' element={<ItemInfoCreate />} />
      </Routes>
    </div>
  );
}

export default App;
