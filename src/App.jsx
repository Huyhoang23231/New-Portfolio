import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { Navbar } from "./layout/navbar";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { Works } from "./page/Works";
import { Muvi } from "./page/projects/muvi";
import { Koi } from "./page/projects/koi";
import { HavenOfFairy } from "./page/projects/havenoffairy";
import { LSante } from "./page/projects/lsante";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<About />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Works/Muvi" element={<Muvi />} />
        <Route path="/Works/Koi" element={<Koi />} />
        <Route path="/Works/HavenOfFairy" element={<HavenOfFairy />} />
        <Route path="/Works/LSante" element={<LSante />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
