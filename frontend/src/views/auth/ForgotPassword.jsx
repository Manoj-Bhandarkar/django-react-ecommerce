import { useState } from 'react'
import apiInstance from '../../utils/axios'

function ForgotPassword() {
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        // attach base url + API end point
        try {

            apiInstance.get(`/user/password-reset/${email}`).then(res => {
                console.log(res.data)
                res.data })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Forgot Password</h1>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email' />
            <br />
            <br />
            <button onClick={handleSubmit}>Reset Password</button>
        </div>
    )
}

export default ForgotPassword