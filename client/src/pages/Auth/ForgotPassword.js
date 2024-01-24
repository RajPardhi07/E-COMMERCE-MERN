import React from 'react'
import  { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css"
import { useNavigate, } from 'react-router-dom'



const ForgotPassword = () => {

    const [email, setemail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/forgot-password", {
              email,
              newPassword,
              answer,
            });
            if (res && res.data.success) {
              toast.success(res.data && res.data.message);
      
              navigate("/login");
            } else {
              toast.error(res.data.message);
            }
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
          }
        
    }
  return (
    <Layout title={'Forgot Password - Ecommerce App'}>
        <div className='loginpage'>

<div className='background'>

</div>

<div className='logincard'>

<form onSubmit={handleSubmit}>
<h1>Reset Password</h1>

    

        <input type="email"
         value={email} 
         onChange={(e) => setemail(e.target.value)}
          className="form-control" id="exampleInputEmail1" 
          placeholder='Enter your Email'
          required
          />

<input type="text"
         value={answer} 
         onChange={(e) => setAnswer(e.target.value)}
          className="form-control" id="exampleInputEmail1" 
          placeholder='Enter your Pet Name'
          required
          />


        <input type="password"
         value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} 
          className="form-control" 
          id="exampleInputPassword1"
           placeholder='Enter your New Password'
           required
           />
    
    {/* <button type="button" onClick={() => {navigate('/forgot-password')}}>Forgot Password</button> */}

    <button type="submit" className="loginsubmit">Reset</button>

</form>
</div>

</div>
        </Layout>
  )
}

export default ForgotPassword