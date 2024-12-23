
import Script from "next/script";
import About from "./about/page";
import OurSevice from "./ourService/page"
import Contact from "./contact/page";
import Link from "next/link";
export default function Home() {
  return (
    <>
        <div>
            <div className="home_container" >
                <div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 mobile_view_title" style={{maxWidth:"900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative idea</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Web Sites</h1>
                            <Link href="/contact"> <span className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <OurSevice />
            <Contact />   
        </div>
        
        <Script src="/demo.js"></Script>
    
    </>    
  );
}
