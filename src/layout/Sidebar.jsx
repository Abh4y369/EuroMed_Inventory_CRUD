import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col w-64 min-h-screen bg-gradient-to-b from-[#0b3c49] via-[#116e88] to-[#1a8ca8] text-gray-100 shadow-xl">
      <div className="px-6 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          EuroMed
        </h1>
        <p className="text-xs text-blue-200 mt-1">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem to="/dashboard" label="Dashboard" />
        <NavItem to="/equipment" label="Equipment" />
        <NavItem to="/reports" label="Reports" />
        <NavItem to="/analytics" label="Analytics" />
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/10 text-xs text-blue-200">
        © 2026 EuroMed
      </div>
    </div>
  );
};

const NavItem = ({ to, label }) => (
  <NavLink to={to}
    className={({ isActive }) =>`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
       ${isActive? "bg-white/10 text-white shadow-md" : "text-blue-200 hover:bg-white/10 hover:text-white"}`} >
    {label}
  </NavLink>
);

export default Sidebar;