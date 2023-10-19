import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/comment" element={<Comment />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/productList" element={<ProductList />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Sidebar>
        </BrowserRouter>
    );
}

export default App;
