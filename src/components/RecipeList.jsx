export const RecipeList = ({title, ingred, time, instruct, renderDetails, id}) => {
    return ( <>
        <div style={{display: "flex", border: "1px solid coral", width: "50%", margin: "10px auto", padding: "8px"}}
        onClick={() => { renderDetails(id)}}>
            <div style={{width: "50%"}}>{title.toUpperCase()}</div>
            <div style={{width: "50%"}}>Cooking time : {time} </div>
        </div>
    </>)
}