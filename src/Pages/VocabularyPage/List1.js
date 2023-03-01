import { AiFillStar } from "react-icons/ai";
import { useVocabulary } from "../../contexts/vocabularyListContext";

function List1({ vocabularyList }) {

    const { setFavoriteVocable } = useVocabulary();

    return <div className="row gap-2 justify-content-center p-1 mx-2 list1">
        {vocabularyList.map((vocable, key) => {
            key = vocable.word;
            return <div className={`${vocable.isFavorite ? "favorite1" : ""} list-item1 `}>
                {/* favorite div */}
                <div className="favorite-button-div">
                    {/* favorite button */}
                    <button onClick={(e) => setFavoriteVocable(vocable)} className="col-2 mx-1  rounded bg-success text-primary fw-bold">
                        <AiFillStar/>
                    </button>
                </div>

                {/* datas */}
                <div className="list-item-data1">

                    <div className="fw-bold data"> {vocable.word}</div>
                    <div className="data"> {vocable.meaning}</div>
                    {/* <div className="data">{vocable.trueCounter}</div> */}
                    {/* <div className="data">{vocable.falseCounter}</div> */}

                </div>

            </div>
        })}

    </div>
}

export default List1;