import { useVocabulary } from "../../contexts/vocabularyListContext";

import { useState} from "react"


function WritePage(){

    const { vocabularyList} = useVocabulary();
    const questionVocabularyList = vocabularyList.sort(()=> 0.5 - Math.random());
    const questionVocable = () =>{
        
    }

    const getQuestionVocable = () =>{

    }

    return (
        <div className=" ">
            
            <div className="bg-dark row m-5 p-5 d-flex align-items-center justfiy-content-center">
                    <div className="border border-5 rounded col-4">Meaning </div>
                    
                    <input className="col-4" placeholder="Word"></input>
                    <button className="btn btn-success col-2 m-1 ">Answer</button>
            </div>

        </div>
    )

}

export default WritePage;