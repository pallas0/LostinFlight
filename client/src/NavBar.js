import React from 'react'

function NavBar({onLogout}) {
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout(null));
    }

  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default NavBar