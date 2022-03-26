import React from 'react'
import Quiz from './Quiz'

function SignUp() {
  return (
    <div>
        <form>
            <label>
                Name:
                <input type='text' name='name' />
            </label>
        </form>
        <button>SignUp</button>

        </div>
  )
}

export default SignUp