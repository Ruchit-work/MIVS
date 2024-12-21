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
            <div className="col-md-6 set_height">
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
            <div className="col-md-6 set_height">
            <div className="service_box row">
                <div className="col-md-6 col-12">
                  <h2 className="title">
                    <span>
                      <strong>Machine </strong>Learning
                      <small>Acquire artificial intelligence or statics based solutions for your work using Python programming</small>
                    </span>
                  </h2>
                </div>
                <div className="col-md-6 col-12">
                    <div className="text-center">  
                      <Image src="/img/Machine-Learning.png"  width={250} height={240}  alt=""/>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 set_height">
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
            <div className="col-md-6 set_height">
            <div className="service_box row">
            <div className="col-md-6 col-12">
                  <h2 className="title">
                    <span>
                      <strong>Machine </strong>Learning
                      <small>Acquire artificial intelligence or statics based solutions for your work using Python programming</small>
                    </span>
                  </h2>
                </div>
                <div className="col-md-6 col-12">
                    <div className="text-center">
                          <Image src="/img/Machine-Learning.png"  width={250} height={240}  alt=""/>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 set_height">
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
            <div className="col-md-6 set_height">
            <div className="service_box row">
                <div className="col-md-6 col-12">
                  <h2 className="title">
                    <span>
                      <strong>Website Speed </strong> Optimization
                      <small>Load your website faster to enhance the user experience</small>
                    </span>
                  </h2>
                </div>
                <div className="col-md-6 col-12">
                      <div className="text-center">
                        <Image src="/img/Website-Speed-Optimization.png"  width={250} height={240}  alt=""/>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      </>    
    );
  }
  