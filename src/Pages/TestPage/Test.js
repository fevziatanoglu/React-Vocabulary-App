
import { useState, useEffect } from "react"
import { useVocabulary } from "../../contexts/vocabularyListContext";

function Test() {

    const { vocabularyList , changeCounter } = useVocabulary();
    // to hold 4 meaning of vocables
    const [answers, setAnswers] = useState([])
    // get vocabulary list in random order 
    const [questionVocabularyList, setQuestionVocabularyList] = useState(vocabularyList.sort(() => 0.5 - Math.random()));

    // question vocable
    const [questionVocable, setQuestionVocable] = useState({ word: "", meaning: "" });
    // to control only click one answer button
    const [isClicked, setIsClicked] = useState(false);

    const getRandomVocable = () => {

        // get a question vocable (triggers useEffect)
        const newQuestionVocable = questionVocabularyList[Math.floor(Math.random() * (questionVocabularyList.length - 1))]
        setQuestionVocable(newQuestionVocable);

        // remove question vocable and set it
        console.log(questionVocabularyList.filter((vocable) => { return vocable.word !== questionVocable.word }))

        const newVocabularyList = questionVocabularyList.filter((vocable) => { console.log(questionVocable.word); return vocable.word !== newQuestionVocable.word });
        setQuestionVocabularyList(newVocabularyList);
    }

    const checkAnswer = (e) => {
        
        if (isClicked == false) {
            setIsClicked(true);
            // true answer case
            if (e.target.value === questionVocable.meaning) {
                console.log("true");
                changeCounter(questionVocable , true)
                // make button bg green
                e.target.classList.add("bg-success")
            }
            // false answer case
            else {
                console.log("false");
                changeCounter(questionVocable , false);
                // make button bg red
                e.target.classList.add("bg-danger");
                // add question vocable to ask again later 
                setQuestionVocabularyList(questionVocabularyList.push(questionVocable));
            }

            setTimeout(function () {
                e.target.classList.remove("bg-success");
                e.target.classList.remove("bg-danger");
                if(questionVocabularyList.length > 4){
                     getRandomVocable();
                }else{
                    console.log("test is done!");
                }
               
                setIsClicked(false);
            }, 1500);
        }

    }


    const getAnswers = () => {
        // set answers in random order
        setAnswers([
            questionVocable.meaning,
            questionVocabularyList[0].meaning,
            questionVocabularyList[1].meaning,
            questionVocabularyList[2].meaning,

        ].sort(() => 0.5 - Math.random()));
    }

    // get vocable when starts
    useEffect(() => getRandomVocable(), [])


    // triggered by question vocable
    useEffect(() => { getAnswers() }, [questionVocable])


    return (

        <div className="col bg-info m-5 p-5 border border-4 rounded ">


            {/* <button onClick={(e) => getRandomVocable()}>Test</button> */}

            <h1 className="fw-bold display-3">{questionVocable.word}</h1>

            <button className="btn btn-primary m-1" onClick={(e) => checkAnswer(e)} value={answers[0]}>{answers[0]}</button>
            <button className="btn btn-primary m-1" onClick={(e) => checkAnswer(e)} value={answers[1]}>{answers[1]}</button>
            <button className="btn btn-primary m-1" onClick={(e) => checkAnswer(e)} value={answers[2]}>{answers[2]}</button>
            <button className="btn btn-primary m-1" onClick={(e) => checkAnswer(e)} value={answers[3]}>{answers[3]}</button>

            <button onClick={(e)=> console.log(questionVocabularyList)}> test</button>

        </div>
    )
}

export default Test;