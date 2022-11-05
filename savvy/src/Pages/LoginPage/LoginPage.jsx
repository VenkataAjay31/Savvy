import React from 'react'
import './LoginPage.css'
import Illu from '../../Assets/Login-illu.jpg'
import QuickSigIn from '../../Components/QuickSigIn/QuickSigIn'
import { Link } from 'react-router-dom'


export default function LoginPage() {
    return (
        <div className='form-img '>
            <div className='form-comp '>
                <form>
                    <p className='login'>Login</p>
                    <div className='form-comp1'>
                        <div className="form-outline mb-4">
                            <input type="email" placeholder="Enter email/mobile no." id="form2Example1" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" placeholder="Enter Password" id="form2Example2" className="form-control" />
                        </div>

                        <div className="row fg-pw mb-4">
                            <div className="col forget-pass">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">  LOGIN </button>
                    <div className="text-center">
                        <p>Don't have an account? <a id='registerlink' href="#!"> <Link to="/registration" >Register Now </Link></a></p>
                    </div>
                </form>
                    <QuickSigIn/>

            </div>

            <div className='lg-img'>
                <img src={Illu} alt="Login-img" />
            </div>



        </div>

    )
}

