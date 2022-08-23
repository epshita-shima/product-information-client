import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from "react-router-dom";
import ItemInfoCreate from './Pages/ItemInfoCreate';
import ItemInfo from './Pages/ItemInfo';
function App() {
  return (
    <div className="bg-gray-100">
      <Header></Header>
      <Routes>
        <Route path='' element={<ItemInfoCreate />} />
        <Route path='/iteminfo' element={<ItemInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
