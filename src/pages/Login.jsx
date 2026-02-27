import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  // Validation
  useEffect(() => {
    const newErrors = { email: "", password: "" };

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.email || errors.password) return;

    const result = await dispatch(login(form));
    if (result.payload) navigate("/dashboard");
    else alert("Invalid credentials");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f5f73] via-[#12718a] to-[#44a7aa] overflow-hidden">
      <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-20 -right-20 blur-3xl"></div>

      <div className="relative backdrop-blur-lg bg-white/90 md:p-10 p-6 rounded-3xl shadow-2xl w-[340px] min-h-[60vh] border border-white/30">
        <div className="flex justify-center mb-6">
          <img src="/EuroMed.logo.png" alt="EuroMed Logo" width="260px" />
        </div>

        <h2 className="text-center text-2xl font-semibold text-[#0f5f73] mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#44a7aa] focus:border-transparent transition shadow-sm ${
                errors.email ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className={`w-full p-3 pr-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#44a7aa] focus:border-transparent transition shadow-sm ${
                  errors.password ? "border-red-400" : "border-gray-300"
                }`}
              />

              {/* React Icons Eye */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <button
            className="w-full bg-gradient-to-r from-[#107187] to-[#44a7aa] text-white py-3 rounded-xl font-semibold hover:scale-[1.02] hover:shadow-lg active:scale-95 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} EuroMed Healthcare
        </p>
      </div>
    </div>
  );
};

export default Login;