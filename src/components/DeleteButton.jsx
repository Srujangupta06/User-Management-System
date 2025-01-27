const DeleteButton = ({id,getFilteredData})=>{
    return(
        <button className="cursor-pointer px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600" onClick={()=>getFilteredData(id)}>Delete</button>
    )
}

export default DeleteButton