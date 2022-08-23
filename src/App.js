import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from "react-router-dom";
import ItemInfoCreate from './Pages/ItemInfoCreate';
import ItemInfo from './Pages/ItemInfo';
import ItemInfoList from './Pages/ItemInfoList';
import UpdateInfoList from './Pages/UpdateInfoList';
function App() {
  return (
    <div className="bg-gray-100">
      <Header></Header>
      <Routes>
        <Route path='' element={<ItemInfo />} />
        <Route path='/iteminfocreate' element={<ItemInfoCreate />} />
        <Route path='/itemlist' element={<ItemInfoList />} />
        <Route path='/update/:id' element={<UpdateInfoList />} />
      </Routes>
    </div>
  );
}

export default App;
