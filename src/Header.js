import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
  const [showIcon, setShowIcon] = useState(false) 

  useEffect (() => {
    const timer = setTimeout(() => {
      setShowIcon(true)
    },10000);
    return () => clearTimeout(timer);
  },[]);

  useEffect(() => {
    // Select all elements with 'data-bs-toggle="tooltip"'
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    
    // Map through the list and initialize each tooltip
    const tooltipList = [...tooltipTriggerList].map(
      tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );
    
    // Clean up tooltips when component unmounts
    return () => {
      tooltipList.forEach(t => t.dispose());
    };
  }, []);
  

  return (
    <div className='position-relative'>
      <div className=' d-flex align-items-center justify-content-center'>
        <div className='headerlogo img-resize'></div>
      </div>
      <div className='buildingimg'>
        <div className='row container-fluid align-items-center justify-content-center p-lg-5'>
          <div className='col-12 col-md-6 col-xl-5 text-white'>
            <div>
              <h1>Excited to Begin Your Child’s Journey With The NEST School?</h1><br/><br/><br/>
              <p className='fs-5'>
                With choice of world-recognised curricula like IB and Cambridge, and a SMART Campus to enhance your child’s learning experience,
                Nest is the like a launchpad for global citizens
              </p><br/><br/><br/>
              <i className='fs-5'>*CBSE is also offered at Nest from Grade 1 to 9</i>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-4 rounded-3 p-4' id="contact">
            <div className='bg-white rounded-3 border'>
              <div className='row pt-3'>
                <div className="col-10 col-lg-5 m-2">
                    <label htmlFor="firstname" className="form-label">First Name</label><span className="text-danger">*</span>
                    <input type="text" className="form-control" id="firstname" placeholder="Enter your name" />
                </div>
                <div className="col-10 col-lg-5 m-2">
                    <label htmlFor="lastname" className="form-label">Last Name</label><span className="text-danger">*</span>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter your name" />
                </div>
              </div>
              <div className='row p-3'>
                <div className="col-10 col-lg-5 m-2">
                    <label htmlFor="email" className="form-label">Email</label><span className="text-danger">*</span>
                    <input type="text" className="form-control" id="email" placeholder="Enter your email id" />
                </div>
                <div className="col-10 col-lg-5 m-2">
                    <label htmlFor="phonenumber" className="form-label">Phone Number</label><span className="text-danger">*</span>
                    <input type="text" className="form-control" id="phonenumber" placeholder="Enter your phone number" />
                </div>
                <div className=" pt-3 mb-4 p-3 ps-lg-5">
                  <label htmlFor="grade" className="form-label">Select Grade</label>
                  <select className="form-select w-75" id="grade">
                    <option value="">Choose a grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">Kindergarten</option>
                    <option value="grade1">Grade 1</option>
                    <option value="grade2">Grade 2</option>
                    <option value="grade3">Grade 3</option>
                    <option value="grade4">Grade 4</option>
                    <option value="grade5">Grade 5</option>
                    <option value="grade6">Grade 6</option>
                    <option value="grade7">Grade 7</option>
                    <option value="grade8">Grade 8</option>
                    <option value="grade9">Grade 9</option>
                  </select>
                </div>
                <div className='col-12 text-center row align-items-center justify-content-center'>
                  <button type='submit' className='btn border-0 rounded-0 text-white col-md-6 col-lg-8 rounded-3 ms-lg-5 ms-3 mb-3' style={{ backgroundColor: 'orange' }}>Please I want to know more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-colour'>
        <div className='row pt-5 pb-5 align-items-center justify-content-center'>
          <div className='curriculamlogo col-11 col-lg-3'></div>
        </div>
      </div>
      {showIcon && (
        <div className='contacticon'    data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Know us more"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faPhone} size="xl" style={{ color: 'white' }} />
          </div>
      </div>
      )}

    </div>
  )
}

export default Header