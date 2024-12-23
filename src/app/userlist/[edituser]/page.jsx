"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Page(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Fetch user details when the component mounts or props.params.edituser changes
  useEffect(() => {
    // Client-side only: Make sure the code runs in the browser (not during build)
    if (typeof window !== "undefined") {
      getUserDetails();
    }
  }, [props.params.edituser]); // Ensure useEffect runs when edituser changes

  // Function to fetch user details based on the user ID (from props)
  async function getUserDetails() {
    const userid = props.params.edituser;
    try {
      const userData = await fetch(`/api/users/${userid}`);  // No need for localhost in production
      const result = await userData.json();
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
      setPhone(result.phone);
      setAddress(result.address);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  // Function to update user details
  async function updateUser() {
    const userid = props.params.edituser;
    const response = await fetch(`/api/users/${userid}`, {
      method: "PUT",
      body: JSON.stringify({ name, email, age, phone, address }),
      headers: {
        "Content-Type": "application/json", // Ensure Content-Type header is set
      },
    });

    const data = await response.json();
    if (data.success) {
      alert("Record has been updated");
    } else {
      alert("Failed to update record");
    }
  }

  return (
    <>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="py-5">
          <div className="row">
            <div className="col-lg-6 m-auto wow slideInUp" data-wow-delay="0.3s">
              <h2>Update User</h2>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Age"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control border-0 bg-light px-4"
                      placeholder="Phone no"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control border-0 bg-light px-4 py-3"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-primary w-100 py-3"
                      onClick={updateUser} // Trigger the updateUser function
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
