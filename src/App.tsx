import { Routes, Route } from "react-router-dom";
import { Store } from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import {Navbar} from './components/Navbar'
function App() {
  return (
      <ShoppingCartProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Store />} />
          </Routes>
      </ShoppingCartProvider>
  );
}

export default App;
