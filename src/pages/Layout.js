import { Link, NavLink, Outlet } from "react-router-dom"
//import Reac tfrom 'module';
const Layout=()=>{
    return(
        <>
        <header id="header" className="fixed-top" style={{backgroundColor:'black',height:'80px'}}>
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo text-white mb-4"><NavLink to='/'>Sabir Bedge </NavLink></h1>
            <nav id="navbar" className="navbar">
              <ul>
                <li> <Link to='/'  className="nav-link scrollto active">Home</Link> </li>
                <li> <Link to='about' className="nav-link scrollto">About</Link> </li>
                <li> <Link to='services' className="nav-link scrollto">Services</Link> </li>
                <li> <Link to='contact' className="nav-link scrollto">Contact</Link> </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" style={{marginRight:'-180px'}} id='menu'></i>
            </nav>
          </div>
        </header> 
    <Outlet/>
        </>
            
    )
}
export default Layout;