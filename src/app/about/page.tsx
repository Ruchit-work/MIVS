import Image from "next/image"
import Link from "next/link"
export default function About()
{
    return <>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-4">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">The Best IT Solution With  Years of Experience</h1>
                    </div>
                    <p className="mb-4 text-justify">MIVS Software is at the forefront of innovative IT solutions, leveraging years of industry experience to deliver: cutting-edge software products. Designed with precision and user-centricity, MIVS offers robust solutions that streamline operations, enhance productivity, and empower businesses to achieve their strategic objectives. Whether you're looking to optimize your workflows, secure your data, or expand your technological capabilities, MIVS Software is your trusted partner in navigating the complexities of the digital landscape.</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width:" 60px" ,height: "60px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+916380541373</h4>
                        </div>
                    </div>
                    <div className="mobile_button">
                    <Link href="/contact"><span className="btn btn-primary py-3 px-5 mt-3 wow zoomIn">Request A Quote</span></Link>   
                    </div>            
                </div>
                <div className="col-lg-5" >
                    <div className="position-relative h-100  mobile_view">
                         <Image src="/img/about.jpg"  width={500} height={550}  alt="" />         
                    </div>
                </div>
             
            </div>
         </div>   
    </div>
        </>
}