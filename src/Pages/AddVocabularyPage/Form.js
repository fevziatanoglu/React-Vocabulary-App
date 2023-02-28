import { useState, useEffect } from "react";
import { useVocabulary } from "../../contexts/vocabularyListContext";

function VocabularyForm() {
    // take variables from context
    const { vocabularyList, addVocabulary } = useVocabulary();
    // to filter list
    const [search, setSearch] = useState({ word: "", meaning: "" });
    // to send addVocabulary data
    const [formData, setFormData] = useState({ word: "", meaning: ""  });
    // isKnown (bool) false true true
    // isFavorite 
    // falseCounter 0 

    // filtered list
    const wordList = vocabularyList.filter((word) => { return word.word.includes(search.word) && word.meaning.includes(search.meaning) }).sort((a, b) => a.word.localeCompare(b.word));

    // submit function
    function handleSubmit(e) {
        e.preventDefault();

        // addVocabulary function checks is word is already exist or not
        if (addVocabulary(formData)) {
            // alert("New word added successfully!");
        } else {
             alert("This vocable is already exist!");
        }
        // clear form
        setFormData({ word: "", meaning: "" });
    }




    // onChange form function
    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    return (
        <div className="mt-5">
            <h1></h1>
            {/* form */}
            <form onSubmit={handleSubmit}>
                <fieldset className="mt-1" >
                    {/* form row */}
                    <div className="row justify-content-center rounded">
                        {/* word input */}
                            <input className="col-4" name="word" type="text" placeholder="Word" value={formData.word} onChange={(e) => handleOnChange(e)} />
                        {/* mean input */}
                            <input className="col-4" name="meaning" value={formData.meaning} type="text" placeholder="Meaning" onChange={(e) => handleOnChange(e)} />
                        {/* submit button */}
                            <button type="submit" disabled={formData.word == "" || formData.meaning == ""} className="btn btn-success col-2 fw-bold">ADD NEW VOCABLE</button>
                    </div>
                </fieldset>

            </form>
        </div>
    );
}

export default VocabularyForm;
