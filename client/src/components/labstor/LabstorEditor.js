// import React from 'react'

// function LabstorEditor( { inEdit, setInEdit, goFetch } ) {

//     const newRecord = {
//         id: "new",
//         question: "Question...",
//         empathy: "Answer 1...",
//         assertiveness: "Answer 2...",
//         creativity: "Answer 3...",
//         ambition: "Answer 4...",
//         optimism: "Answer 5..."
// }

// console.log(inEdit)

//     // write the edits to the DB
//     function handleEditUpdate(event){
//         if (event.target.value === "new") {
//             writeNewToDb(event)
//         } else {
//         const recordId = event.target.value
//         const updates = {
//             question: inEdit.question,
//             empathy: inEdit.empathy,
//             assertiveness: inEdit.assertiveness,
//             creativity: inEdit.creativity,
//             ambition: inEdit.ambition,
//             optimism: inEdit.optimism,  
//         }
//         fetch(`http://127.0.0.1:3000/quizzes/` + recordId, {
//             method: "PATCH",
//             headers: {
//             "Content-Type": "application/json",
//             },
//             body: JSON.stringify(updates),
//         })
//         .then(response => response.json())
//         .then(data => goFetch(data))
//         }
//     }
//     // write new to db
//     function writeNewToDb(e) {
//         const newItem = {
//             question: inEdit.question,
//             empathy: inEdit.empathy,
//             assertiveness: inEdit.assertiveness,
//             creativity: inEdit.creativity,
//             ambition: inEdit.ambition,
//             optimism: inEdit.optimism,  
//         }
//         console.log(newItem)
//         fetch(`http://127.0.0.1:3000/quizzes/`, {
//             method: "POST",
//             headers: {
//             "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newItem),
//         })
//         .then(response => response.json())
//         .then(data => goFetch(data))
//         setInEdit(newRecord)
//     }

//     // handle the edits from the form and pass to state
//     function handleEditChange(e){
//         const name = e.target.name;
//         let value = e.target.value;
//         setInEdit({
//             ...inEdit,
//             [name]: value
//         })
//     }

//     function handleEdit(e) {
//         handleEditChange(e)
//     }

//     function makeNewRecord(){
//         setInEdit(newRecord)
//     }

//     const container = {
//         display: "flex",
//         flexFlow: "column nowrap",
//         justifyContent: "center",
//         margin: "10px 0 0px 10px"
//     }
//     const inputStyle = {
//        backgroundColor: "#fefee3",
//        border: "0px solid #4c956c",
//        padding: "5px",
//        color: "black",
//        width: "60%",
//        margin: "5px 10px 5px 10px",
//        rows:"4",
//         cols:"50",
//         display: "flex",
//     }

//     return (
//         <div key={inEdit.id} style={{border:"1px solid #fefee3", margin: "10px 15px", padding: "5px"}}>
//             <h3><strong>Editor</strong></h3>
//             <div id={inEdit.id} style={container}>
//                 <div><strong>Question ID: </strong><span style={{backgroundColor: "#d68c45", padding:"3px"}}>{inEdit.id}</span></div>
//             </div>
                
//             <div style={container}>
//                 <div>
//                     <label htmlFor="question_text_input">Question Text</label>
//                     <textarea cols="50" rows="4" id="question_text_input" style={inputStyle} key="question" type="textarea" value={inEdit.question} name="question" onChange={handleEditChange}></textarea>
//                 </div>
//                 <div>
//                     <label htmlFor="empathy">Empathy</label>
//                     <textarea style={inputStyle} id="empathy" key="empathy" value={inEdit.empathy} name="empathy" onChange={handleEdit}></textarea>
//                 </div>
//                 <div>
//                     <label htmlFor="assertiveness">Assertiveness</label>
//                     <textarea style={inputStyle} id="assertiveness" key="assertiveness" value={inEdit.assertiveness} name="assertiveness" onChange={handleEdit}></textarea>
//                 </div>
//                 <div>
//                     <label htmlFor="creativity">Creativity</label>
//                     <textarea style={inputStyle} id="creativity" key="creativity" value={inEdit.creativity} name="creativity" onChange={handleEdit}></textarea>
//                 </div>
//                 <div>
//                     <label htmlFor="ambition">Ambition</label>
//                     <textarea style={inputStyle} id="ambition" key="ambition" value={inEdit.ambition} name="ambition" onChange={handleEdit}></textarea>
//                 </div>
//                 <div>
//                     <label htmlFor="optimism">Optimism</label>
//                     <textarea style={inputStyle} id="optimism" key="optimism" value={inEdit.optimism} name="optimism" onChange={handleEdit}></textarea>
//                 </div>
//                 <div>
//                     <button value={inEdit.id} id="save_button" onClick={handleEditUpdate}>Save Edit</button>
//                     <button value={inEdit.id} id="new_button" onClick={makeNewRecord}>New Question</button>
                    
//                 </div>
//             </div>
//         </div>

        
//     )
// }

// export default LabstorEditor 