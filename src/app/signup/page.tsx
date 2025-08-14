"use client";

import React, { useState } from "react";

const SignupPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
  });

  const [phoneError, setPhoneError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // فقط اعداد مجاز
      const isValid = /^[0-9]*$/.test(value);
      setPhoneError(!isValid);
      if (!isValid) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone) {
      alert("لطفاً همه فیلدهای اجباری را پر کنید");
      return;
    }
    if (phoneError) {
      alert("شماره موبایل باید فقط عدد باشد");
      return;
    }
    console.log("Submitted:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="relative w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 overflow-hidden">
        {/* پس‌زمینه blur با انیمیشن ملایم */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none"></div>

        <h2 className="text-3xl font-extrabold text-center mb-8 text-green-700 tracking-wide">
          ثبت نام
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="firstName"
            placeholder="نام"
            value={form.firstName}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-500 placeholder-gray-400 transition duration-300 ease-in-out shadow-sm hover:shadow-md "
            aria-label="نام"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="نام خانوادگی"
            value={form.lastName}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-500 placeholder-gray-400 transition duration-300 ease-in-out shadow-sm hover:shadow-md"
            aria-label="نام خانوادگی"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="شماره موبایل"
            value={form.phone}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl focus:outline-none focus:ring-4 transition duration-300 ease-in-out shadow-sm hover:shadow-md ${
              phoneError
                ? "border-red-500 focus:ring-red-400 border-2"
                : "border border-gray-300 focus:ring-green-400 focus:border-green-500"
            }`}
            dir="rtl"
            aria-label="شماره موبایل"
            required
          />
          {phoneError && (
            <p className="text-red-600 text-sm mt-1 animate-pulse font-medium">
              شماره موبایل فقط باید عدد باشد
            </p>
          )}

          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            value={form.password}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-500 placeholder-gray-400 transition duration-300 ease-in-out shadow-sm hover:shadow-md"
            aria-label="رمز عبور"
            required
          />

          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white font-extrabold rounded-xl shadow-lg hover:bg-green-700 hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer"
            aria-label="ثبت نام"
          >
            ثبت نام
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm select-none">
          با ثبت نام، قوانین ما را پذیرفته‌اید.
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
