'use client'
import Link from "next/link"
import Script from "next/script"
import React,{ useEffect, useState } from "react"
export default function Navbar(){
    const [isactive , setActive] =  useState(false);
    function toggle(){
        setActive(!isactive)
    }    
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);
    const scrollCheck = scroll ? "sticky-top " : "null";
  
    return<>
     
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center"  style={{height: "45px"}}>
                    <small className="me-3 "><i className="fa fa-map-marker-alt me-2"></i><a className="text-light" style= {{ textDecoration  :"none"}} href="https://maps.app.goo.gl/qPLwE4SaPCRYSfQ66">Bardoli , India</a></small>
                    <small className="me-3 "><i className="fa fa-phone-alt me-2"></i><a className="text-light"style= {{ textDecoration  :"none"}} href="tel :+916380541373"> +91 6380541373</a> </small>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i><a className="text-light" style= {{ textDecoration  :"none"}} href="mailto:admin@mivs.in">  admin@mivs.in</a></small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{height: "45px"}}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid position-relative p-0 ">
        <nav className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 nav_background ${scrollCheck }`} >
            <Link href="/" className="set_logo"  >
            <span className="navbar-brand P-0" ><h1 className="header_logo">  <i className="fa fa-user-tie me-2"></i>MIVS</h1></span>
          </Link>
            <button onClick={toggle}  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className={` navbar-collapse ${isactive ?"collapse " :"" }`}  id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link href="/"><span className="nav-item nav-link active"> Home</span></Link> 
                    <Link href="/about"><span className="nav-item nav-link"> About</span></Link>
                    <Link href="/ourService"><span className="nav-item nav-link"> Service</span></Link>       
                    <Link href="/ourWork"><span className="nav-item nav-link">Our Work </span></Link>          
                    <Link href="/contact"><span className="nav-item nav-link">Contact us</span></Link>   
                </div>
            </div>
        </nav>
        
      </div>
      <Script src="/demo.js"></Script>
</>
}


