"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const OTPVerificationForRegisteredUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setFormData((prevData) => ({
        ...prevData,
        email,
      }));
    } else {
      setError("No email found for OTP verification. Please register first.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.stylishhim.com/api/verify-otp-user",
        {
          email: formData.email,
          otp: formData.otp,
        }
      );

      if (response.status === 200) {
        setSuccess(
          "OTP verification successful! Your account is now verified."
        );
        setError("");
        router.push("/");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.Error) {
        setError(error.response.data.Error);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          Maras
        </Link>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              OTP verification for registration to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="otp"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Enter OTP"
                  required
                  value={formData.otp}
                  onChange={handleChange}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OTPVerificationForRegisteredUser;
