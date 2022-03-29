// import React, { useReducer } from 'react'
// import { v4 as uuidv4 } from 'uuid';



// function LabstorRow( { row, handleClickEdit, goFetch } ) {
//     const initialState = {isDel: false, compact: false};
//     const [state, dispatch] = useReducer(reducer, initialState);
        
//         function reducer(state, action) {
//             let newState
//             switch (action.type) {
//             case 'toggleIsDel':
//                 newState = { isDel: !state.isDel }
//                 break
//             default:
//                 throw new Error();
//             }
//             return newState
//         }

//     function onClickEdit(e) {
//         handleClickEdit(e)
//     }

//     function onToggleClick(e) {
//         dispatch({type: 'toggleIsDel'})
//     }

//     //delete the record on click
//     function doDelete(e){
//         const toDelete = e.target.name
//         console.log(toDelete)
//         fetch(`/quizzes/` + toDelete, {
//             method: "DELETE"
//         })
//         .then(response => response.json())
//         .then(data => goFetch())
//     }

//     const itemAuto = {
//         backgroundColor: "#ffc9b9",
//         padding: "10px",
//         position: "relative"
//     }
//     const itemWide = {
//         backgroundColor: "#ffc9b9",
//         flexGrow: ".5",
//         padding: "10px",
//         position: "relative",
//         textAlign: "left"
//     }

//     const helper = {
//         fontSize: "75%",
//         position: "absolute",
//         top: "-15px",
//         left: "-5px",
//         textTransform: "uppercase"
//     }

//     const container = {
//         display: "flex",
//         flexDirection: "row",
//         flexFlow: "row nowrap",
//         justifyContent: "space-around",
//         columnGap: "20px",
//         marginTop: "15px",

//     }

//     const containerColumn = {
//         display: "flex",
//         flexFlow: "column nowrap",
//         padding: "20px",
//         border: "white 1px solid",
//         rowGap: "20px",
//         margin: "10px 15px 10px 15px"
//     }

//     const cancelButtonIcon = '⌧'
//     const delButtonIcon = '🗑'

    // function Item(){
    //     return (
    //         Object.entries(row).map((item) => (
    //                     <div style={itemWide} key={uuidv4()}>
    //                         <span key={uuidv4()} style={helper}>{item[0]}</span>
    //                         {item[1]}
    //                     </div>
    //     )))
    // }

//     return (
//         <div style={containerColumn} key={uuidv4()}>
//                     <div key={uuidv4()} style={container}>
//                         <div style={itemAuto} key={uuidv4()}>
//                             <strong>ID: {row.id}</strong>
//                         </div>
//                     </div>
//                     <div key={uuidv4()} style={containerColumn}>
//                         <Item/>
//                         <div style={container} key={uuidv4()}>
//                             <div style={itemAuto} key={uuidv4()}>
//                                 <span key={uuidv4()} style={helper}>edit...</span>
//                                 <button onClick={onClickEdit} id={row.id} name={row.id}>&#9998;</button>
//                                 <button onClick={onToggleClick}>{state.isDel ? cancelButtonIcon : delButtonIcon}</button>
//                                 { state.isDel ? <button onClick={doDelete} id={row.id} name={row.id}>If you're sure, click to Del Record #<strong>{row.id}</strong></button> : null }    
//                             </div>
//                         </div>
//                     </div>
//         </div>
//     )
// }

// export default LabstorRow