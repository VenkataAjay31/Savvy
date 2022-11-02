import React from 'react'
import './LoginPage.css'
import Illu from '../../Assets/Login-illu.jpg'
import QuickSigIn from '../../Components/QuickSigIn/QuickSigIn'


export default function LoginPage() {
  return (
    <div className='form-img'>
        <div className='form-comp'>
        <form>
            <p className='login'>Log In</p>
            <div className='form-comp1'>
            <div className="form-outline mb-4">
            <input type="email" placeholder="Enter email" id="form2Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
            <input type="password" placeholder="Enter Password" id="form2Example2" className="form-control" />
            </div>

            <div className="row fg-pw mb-4">
                <div className="col">
                <a href="#!">Forgot password?</a>
                </div>
            </div>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4">LOGIN</button>
            <div className="text-center">
                <p>Don't have an account? <a href="#!">Register Now</a></p>
            </div>
        </form>
        </div>

        <div className='lg-img'>
            <img src={Illu} alt="Login-img" />
        </div>
        <div className='quick-sg'>
            <QuickSigIn/>
        </div>
    </div>

  )
}

