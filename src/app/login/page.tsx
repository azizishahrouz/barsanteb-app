"use client";

import React, { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // اگر کاراکتر غیرعددی وارد شد خطا بزن
      if (value === "" || /^[0-9]*$/.test(value)) {
        setForm((prev) => ({ ...prev, [name]: value }));

        // اعتبارسنجی آنلاین شماره موبایل
        if (value.length < 11) {
          setErrors((prev) => ({ ...prev, phone: "شماره موبایل باید حداقل ۱۱ رقم باشد" }));
        } else if (value.length > 15) {
          setErrors((prev) => ({ ...prev, phone: "شماره موبایل باید حداکثر ۱۵ رقم باشد" }));
        } else {
          setErrors((prev) => ({ ...prev, phone: "" }));
        }
      } else {
        // اگر کاراکتر غیرمجاز وارد شد خطا بده
        setErrors((prev) => ({ ...prev, phone: "فقط عدد وارد کن" }));
      }
    } else if (name === "password") {
      setForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { phone: "", password: "" };

    if (!form.phone) {
      newErrors.phone = "شماره موبایل وارد کن";
      valid = false;
    } else if (!/^\d{11,15}$/.test(form.phone)) {
      newErrors.phone = "شماره موبایل باید ۱۱ تا ۱۵ رقم باشه";
      valid = false;
    }

    if (!form.password) {
      newErrors.password = "رمز عبور وارد کن";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("ورود موفق:", form);
      alert("ورود موفق");
      // ادامه عملیات ورود اینجا باشه
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="relative w-full max-w-md bg-white shadow-2xl rounded-3xl p-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none"></div>

        <h2 className="text-3xl font-extrabold text-center mb-8 text-green-700 tracking-wide">
          ورود
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="شماره موبایل"
              value={form.phone}
              onChange={handleChange}
              className={`w-full p-4 rounded-xl focus:outline-none focus:ring-4 transition duration-300 ease-in-out shadow-sm hover:shadow-md ${
                errors.phone
                  ? "border-red-500 focus:ring-red-400 border-2"
                  : "border border-gray-300 focus:ring-green-400 focus:border-green-500"
              }`}
              dir="rtl"
              inputMode="numeric"
              pattern="[0-9]*"
              aria-label="شماره موبایل"
              maxLength={15}
              required
            />
            {errors.phone && (
              <p role="alert" className="text-red-600 text-sm mt-1 font-medium">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="رمز عبور"
              value={form.password}
              onChange={handleChange}
              className={`w-full p-4 border rounded-xl focus:outline-none focus:ring-4 transition duration-300 ease-in-out shadow-sm hover:shadow-md ${
                errors.password
                  ? "border-red-500 focus:ring-red-400 border-2"
                  : "border border-gray-300 focus:ring-green-400 focus:border-green-500"
              }`}
              aria-label="رمز عبور"
              required
            />
            {errors.password && (
              <p role="alert" className="text-red-600 text-sm mt-1 font-medium">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white font-extrabold rounded-xl shadow-lg hover:bg-green-700 hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer"
            aria-label="ورود"
          >
            ورود
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm select-none">
          ورود به حساب کاربری شما
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
