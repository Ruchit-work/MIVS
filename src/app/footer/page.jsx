export default function Footer(){
    const current = new Date().getFullYear()
    return <>
    <div className="footer_decor mt-5">
    <h6>Copyright -{current}</h6>
    </div>
    
    </>
}