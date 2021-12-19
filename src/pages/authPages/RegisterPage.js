import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useToggle from "../../utils/hooks/useToggle";
import AppContext from "../../utils/AppContext";

function RegisterPage() {
  const { setLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useToggle(false);

  const clickHandle = (e) => {
    setIsShowPassword(!isShowPassword);
  };
  const loginHandler = () => {
    setLogin(false);
    navigate("/");
  };
  return (
    <div className="d-flex h-100 justify-content-center align-items-center">
      <div className="card m-0 border-light shadow" style={{ width: 400 }}>
        <div className="card-body">
          <h5 className="card-title text-center culture-font">Welcome to Culture Share</h5>
          <p className="card-text fw-light">
            Please <strong>sign up</strong> and start the adventure
          </p>
          <form className="fw-light">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control fw-light" placeholder="johnny" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control fw-light"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <label className="form-label">Password</label>
                <Link to="#">
                  <small>Forgot Password?</small>
                </Link>
              </div>
              <div className="position-relative">
                <input
                  type={isShowPassword ? "text" : "password"}
                  className="form-control fw-light"
                  placeholder="Your password here"
                />
                <span className="position-absolute top-50 end-0 translate-middle-y me-3">
                  <i
                    style={{ opacity: 0.3 }}
                    className={isShowPassword ? "far fa-eye-slash fa-sm" : "far fa-eye fa-sm"}
                    onClick={clickHandle}></i>
                </span>
              </div>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label">
                I agree to <a href="#">privacy policy & terms</a>
              </label>
            </div>
            <input
              className="btn btn-primary w-100 mb-3"
              onClick={loginHandler}
              value="Sign up"></input>
          </form>
          <p className="#">
            <span className="mr-25">Already have an account? </span>
            <Link to="/auth/login">
              <span>Sign in instead</span>
            </Link>
          </p>
          <div className="d-flex justify-content-between mb-3">
            <hr className="flex-fill border-1 border-top bg-primary border-primary" />
            <p className="mx-2">or</p>
            <hr className="flex-fill border-1 border-top bg-primary border-primary" />
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={loginHandler}
              className="btn p-0"
              style={{ backgroundColor: "#3b5998", width: 35, height: 35 }}>
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              onClick={loginHandler}
              className="btn mx-3 p-0"
              style={{ backgroundColor: "#55acee", width: 35, height: 35 }}>
              <i className="fab fa-twitter"></i>
            </button>
            <button
              onClick={loginHandler}
              className="btn p-0"
              style={{ backgroundColor: "#dd4b39", width: 35, height: 35 }}>
              <i className="fab fa-google"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
