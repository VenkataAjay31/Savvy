import React from 'react'
import './HomePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import AppStore from '../../Assets/Images/AppStore.png'
import GoogleStore from '../../Assets/Images/GooglePlay.png'
import illu2 from '../../Assets/Images/illu2.png'
import features from '../../Assets/Images/features.png'
import ReactDOM from 'react-dom'
import Favicon from 'react-favicon'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className='heroSection ' >
        <section className='hero-section '>
          <div className="hero-section-content ">

            <p className='hero-text ' > BOOK,PLAY & ENJOY </p>
            <div className="downloads">
              <img src={AppStore} alt="" />
              <img src={GoogleStore} alt="" />

            </div>

          </div>
        </section>
      </div>
      
      <section className='aboutUs ' >

        <div className="aboutUs-content ">

          <div>

            <p className="subtitle">About Us</p>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa neque eget amet. Metus, laoreet ornare ultricies tortor dui non id. Consectetur metus, commodo leo
              Pharetra enim proin vulputate adipiscing ac ut. Egestas augue at nunc in diam pharetra arcu elit. Consectetur aliquam etiam adipiscing integer ornare dignissim tristique. Nullatellus. Dolor urna adipiscing quisque interdum enim facilisis. Amet sollicitudin sit urna interdum. Accumsan non sit sed maecenas feugiat. Ac viverra elit nulla molestie venenatis, pulvinar. Nibh sit arcu amet id at vestibulum tellus.
            </p>
            <div className="downloads">
              <img src={AppStore} alt="" />
              <img src={GoogleStore} alt="" />

            </div>
          </div>

          <img src={illu2} alt="" />

        </div>

        <img src={features} alt="" />

      </section>


      <section className='Footer' >
        <footer className="footer">
        <div className="container">
          <div className="row">

            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Affiliate Program</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Booking Status</a></li>
                <li><a href="#">Payment Options</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <Favicon url='http://oflisback.github.io/react-favicon/img/github.ico' />
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>

          </div>
        </div>
      </footer>
      </section>
    </>
  )
}
