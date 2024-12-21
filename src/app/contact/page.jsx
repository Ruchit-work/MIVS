"use client"
import React,{ useState } from "react";
import Link from "next/link";
export default function Contact() {
    const [name, setName] = useState(""); 
    const [email, setEamil] = useState(""); 
    const [age, setAge] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [address, setAddress] = useState("");  

    const  adduser=async()=>{
        console.log(name,email,age,phone,address);
        let result= await fetch("http://localhost:3000/api/users",{
        method:"POST",
        body:JSON.stringify({name,email,age,phone,address})
    }) 
   result =await result.json()
   if(result.success){
    alert("Your Resquest Has been Submited");
   }
}
    return (
      <>
         <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
                <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
            </div>
            <div className="row  mb-5">
                <div className="col-lg-4 mt-3">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width:" 60px", height:" 60px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0"><a style= {{ textDecoration  :"none"}} href="tel :+916380541373"> +91 6380541373</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ps-4 ">
                            <h5 className="mb-2">Email to get free quote</h5>
                            <h4 className="text-primary mb-0"><a href="mailto:admin@mivs.in" style= {{ textDecoration  :"none"}}>admin@mivs.in</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-3 ">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Visit our office</h5>
                            <address className="text-primary mb-0">
                                Steet: Jay Ambe Society,<br />
                                        Bardoli-394601 
                                        , India 
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            
            <Link href="/userlist"><button className="btn btn-success">User list</button></Link>
            </div>
            <div className="row ">
                <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                    <form name="myForm">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} className="form-control border-0 bg-light px-4"  placeholder="Your Name" style={{height: "55px"}}
                                  />
                            </div>
                            <div className="col-md-6">
                                <input type="text" value={email} onChange={(e)=>setEamil(e.target.value)} className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: "55px"}} />
                            </div>
                            <div className="col-12">
                                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control border-0 bg-light px-4" placeholder="Age" style={{height: "55px"}}/>
                            </div>
                            <div className="col-12">
                                <input
                                 type="text" 
                                 value={phone} 
                                 onChange={(e)=>setPhone(e.target.value)} 
                                 className="form-control border-0 bg-light px-4" 
                                 placeholder="Phone no"
                                  style={{height: "55px"}}
                                  />
                            </div>
                            <div className="col-12">
                                <textarea value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Address"></textarea>
                            </div>
                            <div className="col-12">
                                <button onClick={adduser} className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 wow slideInUp map_height" data-wow-delay="0.6s">
                    <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4645024478405!2d73.10939217430928!3d21.133905084160673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0670ad7055377%3A0xaedc2d0fec5f8a50!2sJay%20Ambe%20Society!5e0!3m2!1sen!2sin!4v1730266506476!5m2!1sen!2sin"
                         style={{minHeight:" 350px" ,border:"0"}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                </div>
            </div>
        </div>
    </div>

      </>    
    );
  }
  
