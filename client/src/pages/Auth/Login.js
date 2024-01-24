import React from 'react'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css"
import { useAuth } from '../../context/auth';


import { useNavigate, useLocation } from 'react-router-dom'


const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [auth, setauth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/v1/auth/login',
                { email, password, })
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setauth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate(location.state || '/')
            } else {
                toast.error(res.data.message)

            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong");
        }
    }

    return (
        <Layout title="Login - Ecommerce App">
            <div className='loginpage'>

                <div className='background'>

                </div>

                <div className='logincard'>

                    <form onSubmit={handleSubmit}>
                        <h1>Login Page</h1>
                         <input type="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="form-control" id="exampleInputEmail1"
                            placeholder='Enter your Email'
                            required
                        />


                        <input type="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Enter your Password'
                            required
                        />

                        <button type="button" className='loginforgot' onClick={() => { navigate('/forgot-password') }}>Forgot Password</button>

                        <button type="submit" className="loginsubmit">Login</button>
                        <button type="button" className='registergo' onClick={() => { navigate('/register') }}>Sign Up</button>

                    </form>
                </div>

            </div>
        </Layout>)
}

export default Login