import React from 'react'
import './Password.css'
import Illu from '../../Assets/newPassword.svg'
import QuickSigIn from '../../Components/QuickSigIn/QuickSigIn'

export default function Password() {
  return (
    <div className='form-img'>
        <div className='form-comp'>
        <form>
            <p className='login'>Create new password</p>
            <p className='des'>Your password must more than 6 characters.</p>
            <div className='form-comp1'>

            <div className="form-outline mb-4">
            <input type="password" placeholder="Enter Password" id="form2Example2" className="form-control" />
            </div>

            <div className='form-outline mb-4'>
            <input type="password" placeholder="Confirm Password" name="psw-repeat" className="form-control" id="psw-repeat" required />
            </div>

            <div className="row fg-pw mb-4">
                <div className="col">
                <a href="#!">Forgot password?</a>
                </div>
            </div>
            </div>
            
            <div className='terms'>
                <label><input type="checkbox" checked="checked" name="sameadr"/>Agreed to <span>terms and conditions.</span></label>
            </div>
            <button type="button" className="btn btn-primary btn-block mb-4">REGISTER</button>
        </form>
        </div>

        <div className='lg-img'>
            <img src={Illu} alt="Login-img" />
        </div>

    </div>

  )
}

