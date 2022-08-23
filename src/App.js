import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from "react-router-dom";
import ItemInfoCreate from './Pages/ItemInfoCreate';
import ItemInfo from './Pages/ItemInfo';
import ItemInfoList from './Pages/ItemInfoList';
function App() {
  return (
    <div className="bg-gray-100">
      <Header></Header>
      <Routes>
        <Route path='' element={<ItemInfoCreate />} />
        <Route path='/iteminfo' element={<ItemInfo />} />
        <Route path='/itemlist' element={<ItemInfoList />} />
      </Routes>
    </div>
  );
}

export default App;
