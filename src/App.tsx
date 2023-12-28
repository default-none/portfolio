import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Portfolio } from "./pages";
export default function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
      </Routes>
    </>
  );
}
