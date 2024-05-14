import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className="main-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-black">
        <div className="container-fluid">
          {/* Navbar brand/logo */}
          <a className="navbar-brand" href="/" style={{ paddingLeft: '7vw' }}>
            <img
              src="images/echosystemLogoColored.png"
              alt="logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top img-fluid"
            />
          </a>

          {/* Hamburger Menu Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <div className="navbar-nav ms-auto" style={{ textAlign: 'right' }}>
              <a className="nav-item nav-link text-white" href="/">HOME</a>
              {/* <a className="nav-item nav-link text-white" href="/explore">EXPLORE</a> */}
              <a className="nav-item nav-link text-white" href="/communityhub">COMMUNITY HUB</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Image Start */}
      <div className="content-container">
        <div className="masterclass-logo-large text-center">
          <img
            src="images/heroMasterclass.png"
            className="bg-image img-fluid"
            alt="Master Class"
          />
        </div>

        <div className="masterclass-logo-small text-center">
          <img
            src="images/heroMobile.png"
            className="bg-image img-fluid"
            alt="Master Class"
          />
        </div>
      </div>
      {/* Image End */}
    </div>
  );
}

export default Navbar;


// import React from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";
 
// export function NavbarDefault() {
//   const [openNav, setOpenNav] = React.useState(false);
 
//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false),
//     );
//   }, []);
 
//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="flex items-center gap-x-2 p-1 font-medium"
//         placeholder={null} // These don't do anything, just to remove the bug of death
//         onPointerEnterCapture={null}
//         onPointerLeaveCapture={null}
//       >
//         {/* SVG and link content */}
//       </Typography>
//       {/* Repeat the above block for other nav items, adding the placeholder and pointer event props */}
//     </ul>
//   );
 
//   return (
//     <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
//       <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           className="mr-4 cursor-pointer py-1.5 font-medium"
//           placeholder={null} // These don't do anything, just to remove the bug of death
//           onPointerEnterCapture={null}
//           onPointerLeaveCapture={null}
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">{navList}</div>
//         <div className="flex items-center gap-x-1">
//           <Button variant="text" size="sm" className="hidden lg:inline-block">
//             Log In
//           </Button>
//           <Button
//             variant="gradient"
//             size="sm"
//             className="hidden lg:inline-block"
//           >
//             Sign in
//           </Button>
//         </div>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             {/* SVG for open nav */}
//           ) : (
//             {/* SVG for closed nav */}
//           )}
//         </IconButton>
//       </div>
//       <MobileNav open={openNav}>
//         <div className="container mx-auto">
//           {navList}
//           <div className="flex items-center gap-x-1">
//             <Button fullWidth variant="text" size="sm" className="">
//               Log In
//             </Button>
//             <Button fullWidth variant="gradient" size="sm" className="">
//               Sign in
//             </Button>
//           </div>
//         </div>
//       </MobileNav>
//     </Navbar>
//   );
// }
