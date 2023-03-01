
import { useState } from "react";
import { useVocabulary } from "../../contexts/vocabularyListContext";

import { AiFillEdit, AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai"

function WordItem1({ vocable }) {
   const { removeVocabulary, editVocabulary } = useVocabulary();
   const [isEditMode, setEditMode] = useState(true);
   const [editForm, setEditForm] = useState(vocable);

   const editVocable = () => {

      editVocabulary(vocable, editForm);
      setEditForm(vocable)
   }

   const handleOnChange = (e) => {
      setEditForm({ ...editForm, [e.target.name]: e.target.value });
   }

   return (<div className="list-item" >

      {isEditMode
         // else show word and meaning
         ? <><div className="col-4 text-start">{vocable.word}</div><div className="col-4 text-start">{vocable.meaning}</div></>
         // if edit mode is on show two input
         : <>
            <input name="word" value={editForm.word} onChange={(e) => handleOnChange(e)}></input>

            <input name="meaning" value={editForm.meaning} onChange={(e) => handleOnChange(e)}></input>
         </>}


      <div className="">

         {isEditMode
         // edit button
            ? <button className="edit-btn" onClick={(e) => { setEditMode(!isEditMode) }}>
               <AiFillEdit />
            </button>
            // yes no btn div
            : <div className="yes-no-div">
            {/* apply eddit button*/}
            <button className="yes-btn" onClick={(e) => { editVocable(vocable, editForm); setEditMode(!isEditMode); }}>
               <AiOutlineCheck />
            </button>
            {/* reject edit button */}
               <button className="no-btn" onClick={(e) => { setEditForm(vocable); setEditMode(!isEditMode); }}>
                  <AiOutlineClose />
               </button>
            </div>
         }

         {/* delete button */}
         <button className="delete-btn" onClick={(e) => { removeVocabulary(vocable) }}>
            <AiFillDelete />
         </button>
      </div>


   </div>)
}

export default WordItem1;