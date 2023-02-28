import { useVocabulary } from "../../contexts/vocabularyListContext";

function List1({vocabularyList}) {

    const { setFavoriteVocable} = useVocabulary();
    
    return <div className="row  gap-2 justify-content-center p-1 mx-2">
        {vocabularyList.map((vocable , key) => {
            key = vocable.word;
            return <div className={`${vocable.isFavorite ? "bg-success text-primary" : "bg-light text-dark"} col-2 justify-content-center  rounded  border border-primary border-5 p-1 `}>

                <div className="row justify-content-end"> 
                
                <button onClick={(e)=> setFavoriteVocable(vocable)} className="col-2 mx-1  rounded bg-success text-primary fw-bold">*</button>
                
                 </div>
                <div className="fw-bold"> {vocable.word}</div>
                <div className=""> {vocable.meaning}</div>
                <div>{vocable.trueCounter}</div>
                <div>{vocable.falseCounter}</div>
            </div>
        })}

    </div>
}

export default List1;