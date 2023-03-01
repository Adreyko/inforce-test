import { useEffect } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Detail from "./pages/Home/Products/Product/Detail/Detail";
import { useAppDispatch } from "./redux/redux-hooks/redux-hooks";
import { fetchProducts } from "./redux/slices/thunk/fetchProducts";
import { url } from "./constants/url";
function App() {
  const dispatch = useAppDispatch();
  const setData = async () => {
    await dispatch(fetchProducts(url));
  };
  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
