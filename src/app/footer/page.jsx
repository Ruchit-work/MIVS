export default function Footer(){
    // const current = new Date().getFullYear()
    return <>
    <div className="footer_decor mt-5">
        <div className="d-flex justify-content-between align-items-baseline">
             <h6 className="text-white mb-0  ">© 2025 MIVS Softwares </h6>
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
    
    </>
}