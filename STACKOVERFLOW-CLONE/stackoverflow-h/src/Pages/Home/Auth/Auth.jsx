import React, { useState } from "react";
import "./Auth.css";
import icon from "../../../assets/icon.png";
// import Auth from "./AboutAuth/Auth";
import AboutAuth from "./AboutAuth";
function Auth() {
  const [isSignup, setisSignup] = useState(true);

  const handleSwitch = () => {
    setisSignup(!isSignup);
  };

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="stack overflow " className="login-logo" />
        )}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <h4 style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password
                </h4>
              )}
            </div>
            <input type="password" name="password" id="password" />
            {isSignup && (
              <p style={{ color: "#666767", font: "13px" }}>
                Passwords must contain at least eight characters,including
                atleast 1 letter and 1 number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ color: "#666767", font: "13px" }}>
                Opt-in to receive occasional,
                <br /> product updates,user research invitations,
                <br /> company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Login"}
          </button>

          {isSignup && (
            <p style={{ color: "#666767", font: "13px" }}>
              By clicking "Sign up", you agree to our{" "}
              <span style={{ color: "#007ac6" }}>
                terms of
                <br /> service,
              </span>
              <span style={{ color: "#007ac6" }}>privacy policy</span> and
              <span style={{ color: "#007ac6" }}>cookie policy</span>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="submit"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "sign up"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
