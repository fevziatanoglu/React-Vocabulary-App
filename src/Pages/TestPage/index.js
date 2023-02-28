import { useState, useEffect } from "react";
import { useVocabulary } from "../../contexts/vocabularyListContext";
import Test from "./Test";

function TestPage() {

    const { vocabularyList} = useVocabulary();

    // start the test
    const [isStart , setStart] = useState(false);

    



    return <div className="row justfiy-content-center p-5 m-5">

        <button className="btn btn-primary" disabled={vocabularyList.length < 4} onClick={(e)=> setStart(true)}>Start </button>

        {isStart ? <Test/>
        
        :<div>You have to have at least 4 vocable to test.</div >}


        

    </div>
}

export default TestPage;