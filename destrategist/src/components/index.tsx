import React from 'react';
// import './index.css';

function App() {
  return (
    // <div classNameName={"App"} >
    <div className = "hero">
        <div className ="form-box">
            <div className="button-box">
                <div id="btn">
                    <button type="button" className="toggle-btn" onClick="login()">Log In</button>
                    <button type="button" className="toggle-btn" onClick="register()">Register</button>
                </div>
            </div>
                <div className="social-icons">
                <img src="facebook.jpg" />
                <img src="twitter.jpg" />
                <img src="insta.jpg" />
            </div>
            <form id="login" className="input-group">
                <input type="text" className="input-field" placeholder="User Id" required >
                <input type="text" className="input-field" placeholder="Enter Password" required >
                <input type="checkbox" className="chech-box" /> 
                <span>Remember Password</span>
                <button type="submit" className="submit-btn">Login</button>
            </form>  
                <form id="register" className="input-group">
                <input type="text" className="input-field" placeholder="User Id" required />
                <input type="email" className="input-field" placeholder="Email Id" required />
                <input type="text" className="input-field" placeholder="Enter Password" required />
                <input type="text" className="input-field" placeholder="Confirm Password" required />
                <input type="checkbox" className="chech-box" /> 
                <span>I agree to the terms & conditions</span> 
                <button type="submit" className="submit-btn">Register</button>
                </form>  
            </div>
        </div>
      <script>
            var x = document.getElementById("login");
            var y = document.getElementById("register");
            var z = document.getElementById("btn");
            
            function register(){
                x.style.left="-400px";
                y.style.left="50px";
                z.style.left="110px";
            }
            function login(){
                x.style.left="50px";
                y.style.left="450px";
                z.style.left="0px";
            }
       
        </script>
    </div>

);

}

export default App;