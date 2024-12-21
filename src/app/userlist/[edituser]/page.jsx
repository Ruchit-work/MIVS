"use client"
import React,{ useEffect, useState } from "react";
import Link from "next/link";
//import { useRouter } from "next/navigation";

export default function Page(props) {
  //  const router = useRouter();
    const [name, setName] = useState(""); 
    const [email, setEamil] = useState(""); 
    const [age, setAge] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [address, setAddress] = useState("");  
    useEffect(()=>{
         getUserDetails()
       
    },[]);

    async function getUserDetails(){
         let userid=props.params.edituser
         let userData= await fetch("http://localhost:3000/api/users/"+userid );
            userData = await userData.json();
            let Result = userData.result            
            setName(Result.name);
             setEamil(Result.email); 
             setAge(Result.age);
             setPhone(Result.phone);
            setAddress(Result.address)
    //    router.refresh();     
    }
    async function updateUser(){
            
            let userid=props.params.edituser
            let data= await fetch("http://localhost:3000/api/users/"+userid,{
                method:"PUT",
                body:JSON.stringify({name,email,age,phone,address})
            } );
            alert("record  has been updated");
            data=await data.json();
    }
   
    return  <>
         <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className=" py-5">
            <div className="row ">
                <div className="col-lg-6 m-auto wow slideInUp" data-wow-delay="0.3s">
                <h2>Update User</h2>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} className="form-control border-0 bg-light px-4"  placeholder="Your Name" style={{height: "55px"}}
                                  />
                            </div>
                            <div className="col-md-6">
                                <input type="email" value={email} onChange={(e)=>setEamil(e.target.value)} className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: "55px"}} />
                            </div>
                            <div className="col-12">
                                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control border-0 bg-light px-4" placeholder="Age" style={{height: "55px"}}/>
                            </div>
                            <div className="col-12">
                                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control border-0 bg-light px-4" placeholder="Phone no" style={{height: "55px"}}/>
                            </div>
                            <div className="col-12">
                                <textarea value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Address"></textarea>
                            </div>
                            <div className="col-12">
                            <Link href="/userlist">  <button  className="btn btn-primary w-100 py-3" onClick={updateUser} >Update</button></Link>   
                            </div>             
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>

      </>    
    
  }
  
