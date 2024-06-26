import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { HomeContext } from "../context/AppContext";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { cart } = useContext(HomeContext);

  return (
    <nav className="w-full bg-emerald-800 ">
      <div className="md:justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NavLink to="/">
              <h2 className="text-2xl font-medium  text-zinc-200 font-[cursive]">
                Shop anything!
              </h2>
            </NavLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/20000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {!navbar && (
              <div>
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                  <li className="text-zinc-200 hover:text-blue-600">
                    <NavLink to="/">
                      <AiOutlineHome size={24} />
                    </NavLink>
                  </li>
                  <li className="text-zinc-400 hover:text-white">
                    <NavLink to="/cart">
                      <div className="flex flex-row">
                        <AiOutlineShoppingCart size={30} />
                        {cart > 0 ? (
                          <div className="bg-red-600 font-bold rounded-full text-center text-[12px] px-2 py-1 text-white">
                            {cart}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
            <div className="md:hidden">
              <ul className="items-center justify-center space-y-8">
                <li className="text-zinc-200 hover:text-blue-600 space-y-6">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="text-zinc-200 hover:text-blue-600">
                  <NavLink to="/cart">Cart</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
