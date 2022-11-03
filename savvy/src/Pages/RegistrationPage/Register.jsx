import React from 'react'
import './Register.css'
import Illu from '../../Assets/register.svg'
import QuickSigIn from '../../Components/QuickSigIn/QuickSigIn'

export default function Register() {
  return (
    <div className='form-img'>
        <div className='form-comp'>
        <form>
            <p className='login'>Register</p>
            <div className='form-comp1'>

            <div className="form-outline mb-4">
            <input type="text" id="fname" name="firstname" placeholder="Full Name" className="form-control" />
            </div>

            <div className="form-outline mb-4">
            <input type="email" placeholder="Enter email" id="form2Example1" className="form-control" />
            </div>

            <div className="row fg-pw mb-4">
                <div className="col">
                <a href="#!">Forgot password?</a>
                </div>
            </div>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4">REGISTER</button>
            <div className="text-center">
                <p>Don't have an account? <a href="#!">GET OTP</a></p>
            </div>
        </form>
        </div>

        <div className='lg-img'>
            <img src={Illu} alt="Login-img" />
        </div>

    </div>

  )
}
