import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Grade from "./components/Grade";
import Search from "./components/Search";
import Draw from "./components/Draw";
import Alphabet from "./components/Alphabet";
import Vocabulary from "./components/Vocabulary";
import News from "./components/News";
import Basic from "./components/Basic";
import Particles from "./components/Particles";
import SentenceStructures from "./components/SentenceStructures";
import VerbTenses from "./components/VerbTenses";
import Miscellaneous from "./components/Miscellaneous";
import Translate from "./components/Translate";
import AllKanji from "./components/AllKanji";
import KanjiPractice from "./components/KanjiPractice";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Grade" element={<Grade />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Search/:Kanji" element={<Search />} />
        <Route path="/Draw" element={<Draw />} />
        <Route path="/Alphabet" element={<Alphabet />} />
        <Route path="/Vocabulary" element={<Vocabulary />} />
        <Route path="/News" element={<News />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/VerbTenses" element={<VerbTenses />} />
        <Route path="/SentenceStructures" element={<SentenceStructures />} />
        <Route path="/Particles" element={<Particles />} />
        <Route path="/Miscellaneous" element={<Miscellaneous />} />
        <Route path="/Translate" element={<Translate />} />
        <Route path="/AllKanji" element={<AllKanji />} />
        <Route path="/KanjiPractice" element={<KanjiPractice />} />
      </Routes>
    </Router>
  );
}

export default App;
