import { createContext, useContext, useState } from "react";

// create context
const VocabularyContext = createContext();
// create provider
export const VocabularyProvider = ({ children }) => {
    // vocabularyList
    const [vocabularyList, setVocabularyList] = useState(JSON.parse(localStorage.getItem("vocabularyList")) || []);



    const updateVocabulary = (newVocabularyList) => {
        // set this as vocabularyList
        setVocabularyList(newVocabularyList);
        // and on localStorage
        localStorage.setItem("vocabularyList", JSON.stringify(newVocabularyList));
    }

    // add function
    const addVocabulary = (formData) => {
        // word of vocabulary is not already exist in list
        if (!vocabularyList.find(vocable => vocable.word === formData.word)) {
            // create e new list with old list and new vocable
            // VOCABLE OBJECT!!!!!
            const newVocable = {
                word: formData.word,
                meaning: formData.meaning,
                isFavorite: false,
                trueCounter: 1,
                falseCounter: 1
            }


            const newVocabularyList = [...vocabularyList, newVocable];

            updateVocabulary(newVocabularyList);

            return true;
        } else {
            // if word exist return false
            console.log("This vocable is already exist.")
            return false;
        }
    };

    // remove function
    const removeVocabulary = (vocable) => {
        // filter related vocable
        const newVocabularyList = vocabularyList.filter((listVocable) => { return listVocable.word !== vocable.word });
        // set new list as vocabularyList and on localStorage

        updateVocabulary(newVocabularyList);

        console.log("Vocable removed!");
    }

    // edit function
    const editVocabulary = (oldVocable, editForm) => {
        if (oldVocable.word === editForm.word || !vocabularyList.find(vocable => vocable.word === editForm.word)) {

            const newVocabularyList = vocabularyList.filter((vocable) => {
                if (vocable === oldVocable) {
                    vocable.word = editForm.word; vocable.meaning = editForm.meaning;
                } return true;
            })

            updateVocabulary(newVocabularyList);




        } else {
            console.log("This word already exists!");
            alert("This word already exists!");
        }

    }

    // set favorite
    const setFavoriteVocable = (favoriteVocable) => {

        const newVocabularyList = vocabularyList.filter((vocable) => { if (vocable.word === favoriteVocable.word) { favoriteVocable.isFavorite = !favoriteVocable.isFavorite; } return true })

        updateVocabulary(newVocabularyList);
    }

    // during test , user's answer is true , increase tureCounter
    // else increase falseCounter
    // this data's use for success rate
    const changeCounter = (vocable, isTrue) => {

        const newVocabularyList = vocabularyList.filter((listVocable) => {
            if (listVocable.word === vocable.word) {
                if(isTrue){
                    listVocable.trueCounter++;
                }else{
                    listVocable.falseCounter++;
                }
            }
            return true;
        })  

        updateVocabulary(newVocabularyList);
    }

    // return provider and variables
    return <VocabularyContext.Provider value={{ vocabularyList, addVocabulary, removeVocabulary, editVocabulary, setFavoriteVocable,changeCounter }}> {children} </VocabularyContext.Provider>
}

// export as useContext to use by other components
export const useVocabulary = () => useContext(VocabularyContext);