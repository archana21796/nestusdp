import React from 'react'

const Contact = () => {
  return (
    <div className='container-fluid bg-contact'>
        <div className='row align-items-center justify-content-center text-center text-white pt-5 pb-5'>
            <h3>Learn More About Us</h3>
            <div className='col-4 mt-4 bg-white text-black rounded-3 p-4'>
            <div className='bg-white rounded-3 border ' id="contact">
              <div className='row pt-3'>
                <div className="col-5 m-2">
                    <label htmlFor="firstname" className="form-label">First Name</label><span className="text-danger">*</span>
                    <input type="text" className="form-control" id="firstname" placeholder="Enter your name" />
                </div>
                <div className="col-5 m-2">
                    <label htmlFor="lastname" className="form-label">Last Name</label><span className="text-danger">*</span>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter your name" />
                </div>
              </div>
              <div className='row p-3'>
                <div className="col-5 m-2">
                    <label htmlFor="email" className="form-label">Email</label><span className="text-danger">*</span>
                    <input type="text" className="form-control" id="email" placeholder="Enter your email id" />
                </div>
                <div className="col-5 m-2">
                    <label htmlFor="phonenumber" className="form-label">Phone Number</label><span className="text-danger">*</span>
                    <input type="text" className="form-control" id="phonenumber" placeholder="Enter your phone number" />
                </div>
                <div className=" pt-3 mb-4 p-3 ps-5">
                  <label htmlFor="grade" className="form-label">Select Grade</label>
                  <select className="form-select w-75" id="grade">
                    <option value="">Choose a grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">Kindergarten</option>
                    <option value="grade1">Grade 1</option>
                    <option value="grade2">Grade 2</option>
                    <option value="grade3">Grade 2</option>
                    <option value="grade4">Grade 2</option>
                    <option value="grade5">Grade 2</option>
                    <option value="grade6">Grade 2</option>
                    <option value="grade7">Grade 2</option>
                    <option value="grade8">Grade 2</option>
                    <option value="grade9">Grade 2</option>
                  </select>
                </div>
                <div className='col-12 text-center row align-items-center justify-content-center'>
                  <button type='submit' className='btn border-0 rounded-0 text-white w-50 ms-5 mb-3' style={{ backgroundColor: 'orange' }}>Please I want to know more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact