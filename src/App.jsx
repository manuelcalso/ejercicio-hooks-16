import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Crud from "./components/Crud";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Crud />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
