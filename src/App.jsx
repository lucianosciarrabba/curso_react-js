import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a MiTienda!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenidos a MiTienda!" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;

