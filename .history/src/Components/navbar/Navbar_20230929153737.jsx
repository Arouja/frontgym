import { Link } from "react-router-dom"


const Navbar=() => {


    return (
<>
   {/* Navbar Start */}
   <div className="container-fluid p-0 nav-bar">
   <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
     {/* <a href="" className="navbar-brand">
       <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">
         Gymnast
       </h1>
     </a> */}
     <Link to="/" className="navbar-brand">
      <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">
        Gymnast
        </h1>
    </Link>
     <button
       type="button"
       className="navbar-toggler"
       data-toggle="collapse"
       data-target="#navbarCollapse"
     >
       <span className="navbar-toggler-icon" />
     </button>
     <div
       className="collapse navbar-collapse justify-content-between"
       id="navbarCollapse"
     >
       <div className="navbar-nav ml-auto p-4 bg-secondary">
         {/* <a href="index.html" className="nav-item nav-link">
           Home
         </a> */}
         <Link  className="nav-item nav-link active" to="/">Home</Link>

         {/* <a href="about.html" className="nav-item nav-link active">
           About Us
         </a> */}
         <Link className="nav-item nav-link" to="/about">About Us</Link>

         {/* <a href="feature.html" className="nav-item nav-link">
           Our Features
         </a> */}
         <Link className="nav-item nav-link" to="/feature">Our Features</Link>

         {/* <a href="class.html" className="nav-item nav-link">
           Classes
         </a> */}
         <Link className="nav-item nav-link" to="/classes">Classes</Link>
         <div className="nav-item dropdown">
           {/* <a
             href="#"
             className="nav-link dropdown-toggle"
             data-toggle="dropdown"
           >
             Pages
           </a> */}
           {/* <Link className="nav-link dropdown-toggle" to="/blog">Blog</Link> */}

           <div className="dropdown-menu text-capitalize">
             {/* <a href="blog.html" className="dropdown-item">
               Blog Grid
             </a> */}
             {/* <Link className="dropdown-item" to="/blog grid">Blog Grid</Link> */}

             {/* <a href="single.html" className="dropdown-item">
               Blog Detail
             </a> */}
             {/* <Link className="dropdown-item" to="/blog detail">Blog Detail</Link> */}
           </div>
         </div>
         {/* <a href="contact.html" className="nav-item nav-link">
           Contact
         </a> */}
         <Link className="nav-item nav-link" to="/contact">Contact Us</Link>
         <Link className="nav-item nav-link" to="/profile">Profile</Link>
         <Link className="nav-item nav-link" to="/login">Login</Link>
         <mdb-navbar-nav right>
      <mdb-nav-item>
        1
        <mdb-icon icon="envelope" />
      </mdb-nav-item>
      <mdb-dropdown tag="li" class="nav-item avatar" anchorClass="p-0">
        <mdb-dropdown-toggle tag="a" navLink color="stylish" slot="toggle" waves-fixed>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
            class="rounded-circle z-depth-0"
            alt="avatar image"
            height="35"
          />
        </mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item>Action</mdb-dropdown-item>
          <mdb-dropdown-item>Another action</mdb-dropdown-item>
          <mdb-dropdown-item>Something else here</mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
    </mdb-navbar-nav>
       </div>
     </div>
   </nav>
 </div>
 
 {/* Navbar End */}   
 </> )
};

export default Navbar;

