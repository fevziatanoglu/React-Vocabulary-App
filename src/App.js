
import './App.css';
// import "./bootstrap.min.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"


import { VocabularyProvider } from './contexts/vocabularyListContext';
import AddVocabularyPage from './Pages/AddVocabularyPage';
import TestPage from './Pages/TestPage';
import VocabularyPage from './Pages/VocabularyPage';
import WritePage from './Pages/WritePage';
import NewHeader from './components/NewHeader';
import HomePage from "./Pages/HomePage/HomePage";
import { useEffect } from "react";
import { ThemaProvider } from './contexts/themaContext';

function App() {

  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue("--primary")
    console.log("color: " + color);
  },[]);

  return (
    <div className="App " >
      {/* <Navbar /> */}

      <NewHeader />
      <BrowserRouter>

        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path='addVocabulary' element={<AddVocabularyPage />} />
          <Route path="vocabularyPage" element={<VocabularyPage />} />
          <Route path='testPage' element={<TestPage />} />
          <Route path='writePage' element={<WritePage />} />
        </Routes>

      </BrowserRouter>




    </div>
  );
}






function Root() {
  return (
    <VocabularyProvider>
      <ThemaProvider>
        <App />
      </ThemaProvider>
    </VocabularyProvider>
  )
}

export default Root;
