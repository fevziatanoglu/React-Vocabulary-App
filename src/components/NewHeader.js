import { useState } from "react";
import "./Header.css";

import {MdDarkMode , MdOutlineLightMode} from "react-icons/md";
import { useThema } from "../contexts/themaContext";


function NewHeader() {

   
    const {thema , changeThema} = useThema();
   

     return (
        <header>
            {/* logo */}
            <a href="home">
                <h1>
                    Vocabulary
                </h1>

                <p>
                    React App
                </p>
            </a>

            {/* nav items */}
            <nav>
                <ul>


                    <li ><a href="home" className={window.location.pathname === ("/home" || "") ? "active" : ""}>Home</a></li>

                    <li><a href="addVocabulary" className={window.location.pathname === "/addVocabulary" ? "active" : ""}>Add Vocabulary</a></li>

                    <li><a href="vocabularyPage" className={window.location.pathname === "/vocabularyPage" ? "active" : ""}>My Vocabulary</a></li>

                    <li><a href="testPage" className={window.location.pathname === "/testPage" ? "active" : ""}>Test Vocabulary</a></li>

                    <li>
                        {
                            thema === "light" 
                            ? <button className="thema-btn" onClick={(e)=> changeThema()}><MdDarkMode/></button> 
                            : <button className="thema-btn" onClick={(e)=> changeThema()}><MdOutlineLightMode/></button>
                        }
                        {/* <button onClick={(e)=>{
                      document.documentElement.style.setProperty("--primary" , "white");
                      
                    }}>Change</button> */}
                    
                    
                    </li>
                </ul>
            </nav>
        </header>
    )


}

export default NewHeader;