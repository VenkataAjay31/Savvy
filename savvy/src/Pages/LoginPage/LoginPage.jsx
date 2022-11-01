import React from 'react';

export default function LoginPage() {
  return (
    <div>
    <form>
        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Email address</label>
        <input type="email" placeholder="Enter E-mail" id="form2Example1" class="form-control" />
        </div>

        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">Password</label>
        <input type="password" placeholder="Enter Password" id="form2Example2" class="form-control" />
        </div>

        <div class="row mb-4">
            <div class="col d-flex justify-content-center">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
            </div>
        <div class="col">
        <a href="#!">Forgot password?</a>
        </div>
    </div>


    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>


    <div class="text-center">
        <p>Don't have an account? <a href="#!">Register Now</a></p>
    </div>
    </form>
    </div>
  )
}

