

function List2({ vocabularyList }) {


    return <div className="row row-cols-4   justify-content-between   gap-1 p-2">

        {vocabularyList.map((vocable) => {
            return <div className="row col-3 bg-primary rounded  border border-light border-4 m-1 ">
                <div className="col"> {vocable.word}</div>
                <div className="col"> {vocable.meaning}</div>
            </div>
        })}

    </div>
}

export default List2;