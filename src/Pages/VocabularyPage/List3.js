import { useState } from "react";

function List3({ vocabularyList }) {

    const [index, setIndex] = useState(0);
    const [isShow , setIsShow] = useState(true);

    
    return (
        <>
        <button onClick={(e)=> setIsShow(!isShow)} className="btn btn-light border border-5 border-light">show meaning</button>
        <div className="bg-active row h-100 p-5 mx-5 my-1 rounded border border-4 border-secondary">
            <button className="btn btn-primary col-1" value={-1} disabled={index == 0}  onClick={(e) => { if (index > 0) { console.log(index); setIndex(index-1) } }} >{"<"}</button>

            <div className="col fs-1">
                {vocabularyList[index].word}
                
                {isShow ? " - " + vocabularyList[index].meaning : null}
                </div>
           

            <button className="btn btn-info col-1" value={1} disabled={index == vocabularyList.length-1}  onClick={(e) => { if (index < vocabularyList.length-1) { console.log(index); setIndex(index+1) } }} >{">"}</button>
        </div>

        </>
    )
}

export default List3;