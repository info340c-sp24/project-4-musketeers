import { signOut } from 'firebase/auth';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { auth } from '../firebase';

const Navbar2 = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 pl-6 whitespace-nowrap uppercase"
              to="/"
            >
              <img
                src="images/echosystemLogoColored.png"
                alt="logo"
                width="35"
                height="35"
                className="d-inline-block img-fluid align-middle"
              />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none h-10 align-middle"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-75">
                    <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
                  </svg>
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/communityhub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-75">
                    <path d="M1 8.849c0 1 .738 1.851 1.734 1.947L3 10.82v2.429a.75.75 0 0 0 1.28.53l1.82-1.82A3.484 3.484 0 0 1 5.5 10V9A3.5 3.5 0 0 1 9 5.5h4V4.151c0-1-.739-1.851-1.734-1.947a44.539 44.539 0 0 0-8.532 0C1.738 2.3 1 3.151 1 4.151V8.85Z" />
                    <path d="M7 9a2 2 0 0 1 2-1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 1h-.25v1.25a.75.75 0 0 1-1.28.53L9.69 12H9a2 2 0 0 1-2-2V9Z" />
                  </svg>
                  <span className="ml-2">CommunityHub</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/masterclass"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-75">
                    <path d="M7.702 1.368a.75.75 0 0 1 .597 0c2.098.91 4.105 1.99 6.004 3.223a.75.75 0 0 1-.194 1.348A34.27 34.27 0 0 0 8.341 8.25a.75.75 0 0 1-.682 0c-.625-.32-1.262-.62-1.909-.901v-.542a36.878 36.878 0 0 1 2.568-1.33.75.75 0 0 0-.636-1.357 38.39 38.39 0 0 0-3.06 1.605.75.75 0 0 0-.372.648v.365c-.773-.294-1.56-.56-2.359-.8a.75.75 0 0 1-.194-1.347 40.901 40.901 0 0 1 6.005-3.223ZM4.25 8.348c-.53-.212-1.067-.411-1.611-.596a40.973 40.973 0 0 0-.418 2.97.75.75 0 0 0 .474.776c.175.068.35.138.524.21a5.544 5.544 0 0 1-.58.681.75.75 0 1 0 1.06 1.06c.35-.349.655-.726.915-1.124a29.282 29.282 0 0 0-1.395-.617A5.483 5.483 0 0 0 4.25 8.5v-.152Z" />
                    <path d="M7.603 13.96c-.96-.6-1.958-1.147-2.989-1.635a6.981 6.981 0 0 0 1.12-3.341c.419.192.834.393 1.244.602a2.25 2.25 0 0 0 2.045 0 32.787 32.787 0 0 1 4.338-1.834c.175.978.315 1.969.419 2.97a.75.75 0 0 1-.474.776 29.385 29.385 0 0 0-4.909 2.461.75.75 0 0 1-.794 0Z" />
                  </svg>
                  <span className="ml-2">Masterclass</span>
                </Link>
              </li>
              {userLoggedIn ? (
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-75">
                      <path d="M5.5 16A2.5 2.5 0 0 1 3 13.5V9h3.5v2H5v2.5a.5.5 0 0 0 1 0V11h5v2.5a.5.5 0 0 0 1 0V11h-1.5V9H13v4.5a2.5 2.5 0 0 1-2.5 2.5h-5z" />
                      <path d="M9 9V5.5a.5.5 0 0 0-1 0V9H5.5a.5.5 0 0 0 0 1H8v2.5a.5.5 0 0 0 1 0V10h2.5a.5.5 0 0 0 0-1H9z" />
                    </svg>
                    <span className="ml-2">Logout</span>
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/login"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-75">
                        <path d="M7 10.5v-5h2v5H7z" />
                        <path d="M2.5 1A2.5 2.5 0 0 1 5 3.5V4h6v-.5A2.5 2.5 0 0 1 13.5 1h-10zm0 11A2.5 2.5 0 0 1 0 9.5V8h6v1.5A2.5 2.5 0 0 1 3.5 14h-1z" />
                      </svg>
                      <span className="ml-2">Login</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/register"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-75">
                        <path d="M3 5v2h2V5H3zm4 0v2h2V5H7zm4 0v2h2V5h-2z" />
                        <path d="M8 10h1.5v3.5H5v-1H3.5v1A2.5 2.5 0 0 0 6 16h4a2.5 2.5 0 0 0 2.5-2.5v-1H11v1H9.5V10H8zm2.5 4H8v-1h2.5v1z" />
                      </svg>
                      <span className="ml-2">Register</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
