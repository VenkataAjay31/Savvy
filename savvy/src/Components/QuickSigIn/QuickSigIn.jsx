import React from 'react'
import './QuickSigIn.css'
import fb from '../../Assets/Icons/facebook_ic.svg' 
import google from '../../Assets/Icons/google_ic.svg' 
import apple from '../../Assets/Icons/cib_apple.svg' 

export default function QuickSigIn() {
    return (
        <>
            <div className="QuickSign-container ">
                <div className="loginWithText ">
                    <hr id='line' size="2" width="33%" color='#585858' ></hr>
                    <span> Or Login With </span>
                    <hr id='line' size="2" width="33%" color='#585858' ></hr>
                </div>
                <div className="QuickSign-logos">
                   <div > <img src={fb} alt="" /> </div>
                   <div > <img src={google} alt="" /> </div>
                   <div > <img src={apple} alt="" /> </div>
                </div>
            </div>
        </>
    )
}
