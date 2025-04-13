import React from "react"
function Navbar(){

  return(
    <>
    <nav className="navbar navbar-expand-lg " >
     
    
  <div className="container-fluid">
    <a className="navbar-brand" href="/Pages/HomePage'" style={{ fontSize: '30px' }}>CareWave </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-100">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Medical Staff</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Contact Us</a></li>
            
            

            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Book an appointment</a>
        </li>
        
        
        

     
        
      </ul>
      <div className="ms-auto">
      <button type="button" className="btn btn-secondary btn-sm"
      style={{backgroundColor: '#51A485',
        border: 'none',
        fontSize: '15px'}}
      >Log in/Sign up</button>
      </div>
      
      
      
    </div>
    
  </div>
  
</nav>
<div className="navbar-divider"></div>





    
  </>
  );

}
export default Navbar