import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import logo from '../../assets/quickselar.png';
import {BsFillLockFill, BsFillUnlockFill} from 'react-icons/bs'
import validation from '../../Validation';
import Loader from '../../component/Loader';
import Notiflix from 'notiflix';


const LandingPage = () => {
    const [isLoading, setIsLoading]=useState(false)
    const [values, setValues] = useState({
        email:"",
        password:"",
    })
    const [errors, setErrors] = useState({})
    
    const [showPassword, setShowPassword] = useState(false)

    const handleChange =(e)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }
    // console.log(values)
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true)  
        setErrors(validation(values));
      
        if(Object.keys(errors).length === 0 && (values.email !=="" && values.password !=="")){

            setIsLoading(false)
            Notiflix.Notify.success('Successfully Logged in');
        }
        else{
            setIsLoading(false)
            Notiflix.Notify.warning('Invalid Credentials');
        }


    }
   


  return (
    <div className='landing-page'>
        <div className='container flex-between'>
            <div className='image-bg'>
                <div className='summary-box'> 
                    <img src={logo} alt="quickselar" />
                    <h2> Accounting | Inventory | Reporting</h2>
                </div>
            
            </div>
            <main>
                {isLoading && <Loader/>}
                <div className='main-container'>
                    <span className='logo-wrapper'>
                        <img src={logo} alt="quickselar"/>
                    </span>
                    <h2>Kindly sign in to access your store.</h2>
                    <div className='form-wrapper'>
                        <form onSubmit={handleSubmit}>
                            <label>Email*</label>
                            <div className="form-control">
                                <input type="text" name='email' placeholder='Email' value={values.email} onChange={handleChange} />
                            {errors.email && <p style={{color:'red', fontSize:"13px", paddingTop:'5px'}} >{errors.email} </p>}
                            </div>

                            <label>Password*</label>
                            <div className="form-control">
                                <input type={showPassword? "password" : "text"} name='password' placeholder='Password' value={values.password} onChange={handleChange}/>
                                <span onClick={()=> setShowPassword(!showPassword)}>{showPassword? <BsFillLockFill size={25} color='#1886c7' fill='#1886c7'/> : <BsFillUnlockFill size={25} color='#1886c7' fill='#1886c7'/>} </span>
                            {errors.password && <p style={{color:'red', fontSize:"13px", paddingTop:'5px'}}>{errors.password} </p>}
                            </div>

                            <small>Forgotten Password? <a href="#LandingPage">Click here</a></small>
                            <button>Login</button>
                            <small className='register'>Don't have an account? <a href="#LandingPage">Sign Up</a></small>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    </div>
  )
}

export default LandingPage