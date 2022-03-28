import React from 'react'

function LabstorOk( { isDel, rowId } ) {
    
    function doDelete(){
        console.log("delete")
    }

    function DelShow() {
            if (isDel) {
                return <button onClick={doDelete} id={rowId} name={rowId}>&#x1F5D1; Click to Del Record #<strong>{rowId}</strong></button> 
            } else {
                return null
            } 
        }

  return (
    <div>
        <DelShow/>
    </div>
  )
}

export default LabstorOk