import React from 'react'

export default function Login() {
    
// const navigate = useNavigate()
    return (
        <div >
            <h3>Login Page</h3>
            <form>
                <div>
                    UserName: <input type="text" placeholder="Input Username" />
                </div>
                <div>
                    Password: <input type="text" placeholder="Input Password" />
                </div>
                <div>
                    <button type='submit'  >Login</button>
                    <button >Logout</button>
                </div>
            </form>
        </div>
    )
}
