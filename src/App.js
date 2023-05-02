import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SearchForMovie from "./components/SearchForMovie";
import Watched from "./components/small/Watched";
import Watchlist from "./components/small/Watchlist";
import ContextComp from "./Context/ContextComp";

function App() {
  return (
    <div>
      <ContextComp>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<SearchForMovie />}></Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
            <Route path="/watched" element={<Watched />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextComp>
    </div>
  );
}

export default App;
