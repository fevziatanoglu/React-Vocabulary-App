
import { useState } from "react";
import { useVocabulary } from "../../contexts/vocabularyListContext";

function WordItem1({ vocable }) {
   const { removeVocabulary ,editVocabulary } = useVocabulary();
   const [isEditMode, setEditMode] = useState(true);
   const [editForm, setEditForm] = useState(vocable);

   const editVocable = () => {

      editVocabulary(vocable , editForm);
      setEditForm(vocable)
   }

   const handleOnChange = (e) => {
      setEditForm({ ...editForm, [e.target.name]: e.target.value });
   }

   return (<div className=" row  justify-content-center mt-1" >
      {isEditMode
         ? <><div className="col-4 text-start">{vocable.word}</div><div className="col-4 text-start">{vocable.meaning}</div></>

         : <>
            <input className="rounded bg-secondary text-primary fw-bold col-4 text-start" name="word" value={editForm.word} onChange={(e) => handleOnChange(e)}></input>

            <input className="rounded bg-secondary text-primary fw-bold col-4 text-start" name="meaning" value={editForm.meaning} onChange={(e) => handleOnChange(e)}></input>
         </>}


      <div className="row col-2  justify-content-center gap-1">

         {isEditMode
            ? <button className=" btn btn-light col-5  justify-content-center text-success fw-bold" onClick={(e) => { setEditMode(!isEditMode) }}>edit</button>
            : <><button className="rounded bg-success  col-2  justify-content-center fw-bold" onClick={(e) => { editVocable(vocable , editForm); setEditMode(!isEditMode); }}>y</button>
            <button className="rounded bg-dark  col-2  justify-content-center fw-bold" onClick={(e) => {  setEditForm(vocable); setEditMode(!isEditMode); }}>n</button>
            </>
         }

         <button className="btn btn-danger col-5 text-center fw-bold text-primary" onClick={(e) => { removeVocabulary(vocable) }}>X</button>
      </div>


   </div>)
}

export default WordItem1;