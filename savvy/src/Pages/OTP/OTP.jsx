import React from 'react'
import './OTP.css'
import Illu from '../../Assets/OTP.svg'

export default function Password() {
  return (
    <div className='form-img'>
        <div className='form-comp'>

            <p className='login'>OTP Verification</p>
            <p className='des'>Enter the verification code we just sent on your email/Mobile no.</p>

            <div class="input-container d-flex flex-row justify-content-center mt-2">
            <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
            <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
            <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
            <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
            <input type="text" class="m-1 text-center form-control rounded" maxlength="1"/>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4">REGISTER</button>
            
        </div>
        <div className="terms">
            <p>Didn't receive code? <a href="#!">Resend OTP</a></p>
        </div>

        <div className='lg-img'>
            <img src={Illu} alt="Login-img" />
        </div>

    </div>

  )
}
