import { useVocabulary } from "../../contexts/vocabularyListContext";
import { useState } from "react";
import List1 from "./List1";
import List2 from "./List2";
import List3 from "./List3.js";

function VocabularyPage() {

    const { vocabularyList } = useVocabulary();

    const [listStyle, setStyle] = useState("1");
    const [listMode, setMode] = useState("0");

    const listedVocabularyList = vocabularyList.filter((vocable) => {
        if (listMode === "0") {
            return true;
        }
        else if (listMode === "1") {
            return vocable.isFavorite;
        }else if(listMode === "2"){
            return (vocable.trueCounter / vocable.falseCounter) > 5;
        }else{
            return (vocable.trueCounter / vocable.falseCounter) < 1;
        }
    })

    const [keysDisabled, setKeysDisabled] = useState({
        1: true,
        2: false,
        3: false
    });



    const handleMode = (e) => {
        setMode(e.target.value);
        console.log(listMode);
    }


    const handleStyle = (e) => {
        setStyle(e.target.value);
        setKeysDisabled({ [e.target.value]: true })
    }

    console.log(vocabularyList);
    return (<div>
        <div className="d-flex justify-content-end   p-2">

            <div className="row col-2 gap-1 ">
                <button className="btn btn-info text-center text-primary fw-bold col" disabled={keysDisabled[1]} value={1} onClick={(e) => handleStyle(e)}>1</button>
                <button className="btn btn-info text-center text-primary fw-bold col" disabled={keysDisabled[2]} value={2} onClick={(e) => handleStyle(e)}>2</button>
                <button className="btn btn-info text-center text-primary fw-bold col" disabled={keysDisabled[3]} value={3} onClick={(e) => handleStyle(e)}>3</button>

                <select onChange={(e) => handleMode(e)} className="form-select" aria-label="Default select example">
                    <option value="0" >All Vocables</option>
                    <option value="1" onChange={(e) => handleMode(e)}>Favorites</option>
                    <option value="2">Well Known</option>
                    <option value="3">Need to Study</option>
                </select>
            </div>
        </div>

        <div className="justify-content-center">
            {listStyle === "1" ? <List1 vocabularyList={listedVocabularyList} />
                : listStyle === "2" ? <List2 vocabularyList={listedVocabularyList} />
                    : <List3 vocabularyList={listedVocabularyList} />}
        </div>



    </div>)
}


export default VocabularyPage;