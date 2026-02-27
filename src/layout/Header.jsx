import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setOpen(true)} className="md:hidden text-2xl text-[#107187] hover:text-[#0f5f73] transition"
              aria-label="Toggle Menu" >
              ☰
            </button>
            <div>
              <span className="text-sm text-gray-600 tracking-tight">
                Welcome,{" "}
                <span className="font-semibold text-[#107187]">
                  Admin
                </span>
              </span>
            </div>
          </div>
          <div>
            <img src="/EuroMed.logo.png"  alt="EuroMed Logo" className="h-[60px] w-auto object-contain" />
          </div>
        </div>
      </header>
      <div className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`} >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />

        <div className="relative w-full max-w-xs h-full bg-gradient-to-b from-[#0f5f73] via-[#107187] to-[#44a7aa] text-white px-6 py-8 space-y-3 shadow-xl" >
          <MobileNavItem to="/dashboard" label="Dashboard" onClick={() => setOpen(false)}/>
          <MobileNavItem  to="/equipment" label="Equipment"  onClick={() => setOpen(false)}/>
          <MobileNavItem to="/reports" label="Reports" onClick={() => setOpen(false)}/>
          <MobileNavItem to="/analytics" label="Analytics" onClick={() => setOpen(false)}/>
        </div>
      </div>
    </>
  );
}

const MobileNavItem = ({ to, label, onClick }) => (
  <NavLink to={to}
    onClick={onClick} className={({ isActive }) => `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
       ${
         isActive ? "bg-white/20 text-white shadow-md"
           : "text-white/80 hover:bg-white/10 hover:text-white"
       }`
    } >
    {label}
  </NavLink>
);

export default Header;