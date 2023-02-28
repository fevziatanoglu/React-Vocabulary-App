import { useState } from "react";
import { useVocabulary } from "../../contexts/vocabularyListContext";
import WordItem1 from "./ListItem";

function VocabularyList() {

    const { vocabularyList } = useVocabulary();
    const [search, setSearch] = useState({ word: "", meaning: "" });
    const wordList = vocabularyList.filter((word) => { return word.word.includes(search.word) && word.meaning.includes(search.meaning) }).sort((a, b) => a.word.localeCompare(b.word));
    const handleOnChange = (e) => { setSearch({ ...search, [e.target.name]: e.target.value }) }

    return (
        <div className="row justify-content-center rounded mt-3 mb-3">
            {/* search bar */}
            <input className="col-4" placeholder="enter a word" name="word" onChange={handleOnChange}></input>
            <input className="col-4" placeholder="enter a meaning" name="meaning" onChange={handleOnChange}></input>
            <button className="btn btn-light col-2 fw-bold text-primary" >SEARCH</button>
            {/* vocabulary list */}

            <div className="mt-2">
                {wordList.map((vocable, key) => { return <WordItem1 key={key} vocable={vocable} /> })}
            </div>
        </div>
    )
}

export default VocabularyList;