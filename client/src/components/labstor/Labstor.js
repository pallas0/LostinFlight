import React, {useState, useEffect} from 'react'
import LabstorEditor from './LabstorEditor'
import LabstorList from './LabstorList'

function Labstor() {
    const [initialList, setInitialList] = useState([])
    const [isEditShowing, setIsEditShowing] = useState(false)
    // const [isNewShowing, setIsNewShowing] = useState(false)
    const [inEdit, setInEdit] = useState(
        {
            id: "",
            question: "",
            empathy: "",
            assertiveness: "",
            creativity: "",
            ambition: "",
            optimism: "",
        }
    )

    // get the initial database list
    useEffect (() => {
    fetch(`http://127.0.0.1:3000/quizzes`)
    .then(resp => resp.json())
    .then((data)=>setInitialList(data))
    }, [])


    // manual refresh of our DB list
    function goFetch() {
        fetch(`http://127.0.0.1:3000/quizzes`)
        .then(resp => resp.json())
        .then((data)=>setInitialList(data))
    }


    function toggleEditor(e){
        console.log("toggled editor showing")
        setIsEditShowing(isEditShowing => isEditShowing = !isEditShowing)
    }

    function handleClickEdit(e){
        fetch(`/quizzes/${e.target.id}`)
        .then(resp => resp.json())
        .then((data) => setInEdit(data))
    }

    const labstorContainerStyle = {
        backgroundColor: '#4c956c',
        marginTop: "10",
        margin: "0 auto",
        padding: "10px",
        textalign: "center"
    }


  return (

    <div style={labstorContainerStyle}>
        <h2>Labstor: Legend Database Editor</h2>
        <button onClick={goFetch}>refresh</button>
        <button onClick={toggleEditor}>{isEditShowing ? "hide editor" : "show editor" }</button>
                {isEditShowing ? <LabstorEditor inEdit={inEdit} setInEdit={setInEdit} goFetch={goFetch} handleClickEdit={handleClickEdit}/> : null}
                <LabstorList initialList={initialList} handleClickEdit={handleClickEdit} goFetch={goFetch}/>
            
            
    </div>
  )
}

export default Labstor