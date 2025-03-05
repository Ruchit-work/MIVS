import Image from "next/image";
export default function OurSevice() {
    return (
      <>
      <div className="container">
        <div className="mt-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                <h1 className="mb-0">we provide list of Services</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-12 set_height">
              <div className="service_box row">
                  <div className="col-md-6 col-12">
                    <div className="text-center">
                      <Image src="/img/Website-Speed-Optimization.png"  width={250} height={240}  alt=""/>
                    </div>
                  </div>
                <div className="col-md-6 col-12">
                  <h2 className="title">
                    <span>
                      <strong>Website Speed </strong> Optimization
                      <small>Load your website faster to enhance the user experience</small>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 set_height">
            <div className="service_box row">
                <div className="col-md-6 col-12">
                  <h2 className="title">
                    <span>
                      <strong> Software</strong> Development 
                      <small> End-to-end development: custom apps, web, mobile, and AI solutions for business growth.</small>
                    </span>
                  </h2>
                </div>
                <div className="col-md-6 col-12">
                    <div className="text-center">  
                      <Image src="/img/software_dev.png"  width={250} height={240}  alt=""/>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 set_height">
              <div className="service_box row">
                  <div className="col-md-6 col-12">
                    <div className="text-center">
                        <Image src="/img/devops_1.png"  width={250} height={240}  alt=""/>
                    </div>
                  </div>  

                <div className="col-md-6 col-12">
                  <h2 className="title">
                    <span>
                      <strong>DevOps  </strong> Services
                      <small>Streamline development, CI/CD, monitoring, security for faster and reliable software delivery.</small>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 set_height">
            <div className="service_box row">
            <div className="col-md-6 col-12">
                  <h2 className="title">
                    <span>
                      <strong>Cloud  </strong>Services
                      <small>Enhance scalability with cloud migration, security, and infrastructure management for seamless digital transformation.</small>
                    </span>
                  </h2>
                </div>
                <div className="col-md-6 col-12">
                    <div className="text-center">
                          <Image src="/img/cloudservices.png"  width={250} height={240}  alt=""/>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 set_height mx-auto">
              <div className="service_box row">
                  <div className="col-md-6 col-12">
                    <div className="text-center">
                        <Image src="/img/Website-Speed-Optimization.png"  width={250} height={240}  alt=""/>
                    </div>
                  </div>
                <div className="col-md-6 col-12">
                  <h2 className="title">
                    <span>
                      <strong>Enterprise </strong>  Solutions
                      <small>ERP System Implementation and Custom CRM Solutions</small>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
        </div>
      </div>
      </>    
    );
  }
  