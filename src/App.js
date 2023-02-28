
import './App.css';
import "./bootstrap.min.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/Header';


import { VocabularyProvider } from './contexts/vocabularyListContext';
import AddVocabularyPage from './Pages/AddVocabularyPage';
import TestPage from './Pages/TestPage';
import VocabularyPage from './Pages/VocabularyPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      
        <BrowserRouter>

          <Routes>

            <Route path='addVocabulary' element={<AddVocabularyPage />} />
            <Route path="vocabularyPage" element={<VocabularyPage/>}/> 
            <Route path='testPage' element={<TestPage />} />
          </Routes>




        </BrowserRouter>
      
    </div>
  );
}






function Root(){
return (
<VocabularyProvider>
  <App/>
</VocabularyProvider>
)
}

export default Root;
