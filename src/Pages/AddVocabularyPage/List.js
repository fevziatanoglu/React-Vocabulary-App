import { useState } from "react";
import { useVocabulary } from "../../contexts/vocabularyListContext";
import WordItem1 from "./ListItem";

import {AiOutlineSearch} from "react-icons/ai";

function VocabularyList() {

    const { vocabularyList } = useVocabulary();
    const [search, setSearch] = useState({ word: "", meaning: "" });
    const wordList = vocabularyList.filter((word) => { return word.word.includes(search.word) && word.meaning.includes(search.meaning) }).sort((a, b) => a.word.localeCompare(b.word));
    const handleOnChange = (e) => { setSearch({ ...search, [e.target.name]: e.target.value }) }

    return (

        <>
            <form >
                {/* search bar */}
                <input  placeholder="Search a word" name="word" onChange={handleOnChange}></input>
                <input  placeholder="Search a meaning" name="meaning" onChange={handleOnChange}></input>
                <div className="search-icon" >
                    <AiOutlineSearch/>
                </div>
                {/* vocabulary list */}



            </form>

            <div className="list">
                {wordList.map((vocable, key) => { return <WordItem1 key={key} vocable={vocable} /> })}
            </div>
        </>
    )
}

export default VocabularyList;