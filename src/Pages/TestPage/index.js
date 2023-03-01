import { useState, useEffect } from "react";
import { useVocabulary } from "../../contexts/vocabularyListContext";
import Test from "./Test";
import "./style.css"

function TestPage() {

    const { vocabularyList } = useVocabulary();

    // start the test
    const [isStart, setStart] = useState(false);





    return <div className="row justfiy-content-center p-5 m-5">


        {isStart ? <Test />

            :
            <div className="start-btn-div">
                <button className="start-btn" disabled={vocabularyList.length < 4} onClick={(e) => setStart(true)}>START</button>
                <p>You have to have at least 4 vocable to test!</p >
            </div>


        }




    </div>
}

export default TestPage;