import React from 'react'
import './OTP.css'
import Illu from '../../Assets/OTP.svg'

export default function Password() {
  return (
    <div className='form-img '>
      <div className='form-comp '>

        <div className="otp-text">
          <p className='login'>OTP Verification</p>
          <p className='des'>Enter the verification code we just sent on your email/Mobile no.</p>
        </div>

        <div class="input-container  ">
          <input type="text" class="m-1 text-center" maxlength="1" value={4} />
          <input type="text" class="m-1 text-center" maxlength="1" value={2} />
          <input type="text" class="m-1 text-center" maxlength="1" value={6} />
          <input type="text" class="m-1 text-center" maxlength="1" />
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4">REGISTER</button>


        <div className="terms">
          <p>Didn't receive code? <a id='registerlink' href="#!">Resend OTP</a></p>
        </div>
        
      </div>


      <div className='lg-img'>
        <img src={Illu} alt="Login-img" />
      </div>

    </div>

  )
}
