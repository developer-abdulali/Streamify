import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { BASE_URL } from "../config";
import toast from "react-hot-toast";
import { authContext } from "../context/AuthContext.jsx";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);  
    try {
      const user = {
        email: formData.email,
        password: formData.password,
      };
      const res = await axios.post(`${BASE_URL}/auth/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 200) {
        throw new Error(res.data.message);
      }
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: res.data.data.name,
          // user: res.data.user,
          token: res.data.token,
          role: res.data.role,
        },
      });
      console.log("Login data", res.data);
      setLoading(false);
      toast.success("Login successful");
      navigate("/home");
      setFromData({
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);  
  //   try {
  //     const user = {
  //       email: formData.email,
  //       password: formData.password,
  //     };
  //     const res = await axios.post(`${BASE_URL}/auth/login`,user, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const result = await res.json();
  //     if (!res.ok) {
  //       throw new Error(result.message);
  //     }
  //     dispatch({
  //       type: "LOGIN_SUCCESS",
  //       payload: {
  //         user: res.data,
  //         token: res.token,
  //         role: res.role,
  //       },
  //     });
  //     console.log("Login data", result);
  //     setLoading(false);
  //     toast.success(message);
  //     navigate("/home");
  //     setFromData({
  //       email: "",
  //       password: "",
  //     });
  //   } catch (error) {
  //     toast.error(error.message);
  //     setLoading(false);
  //   }
  // };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>
        <form onSubmit={submitHandler} className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              required
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            />
          </div>
          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Email"
              value={formData.password}
              required
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            />
            <span
              className="absolute right-3 top-6 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
            <div className="mt-7">
              <button
                type="submit"
                className="w-full bg-primaryColor text-white leading-[30px] rounded-lg px-4 py-3"
              >
                Login
              </button>
            </div>
            <p className="mt-5 text-textColor text-center">
              Don&apos;t have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
