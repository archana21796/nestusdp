import React from 'react'

const Syllabus = () => {
  return (
    <div>
      <div className='container-fluid pt-5'>
        <div className='row align-items-center justify-content-center '>
          <div className='col-8 text-center'>
            <h2>International and Indian Curriculum Options for Diverse Learning Pathways
            </h2>
            <p className='pt-3 fs-5'>At Nest, we combine hands-on, modern teaching methods and value-based education. Our well-equipped, positive and enriching school environment has been specifically designed to enhance and
               deepen your child’s learning experiences. </p><br/><br/>
               <p className='fs-5'>And even if your child joins mid-term, our Bridge Programme gives them the one-on-one support they need to quickly 
                catch up with their peers and settle in more easily.</p>
          </div>
          <div className='col-8 pt-5 row align-items-center justify-content-center '>
              <div className='col-4'>
                <div className='studbg1 studbg'></div>
                <div>
                  <h3>Flexible Credit-Based System</h3>
                     {/* <h6 className='pt-3 pb-3'>(ages 2.5-4)</h6> */}
                     <p>Explore a broad curriculum with a wide range of courses, electives, AP courses, and
dual enrolment opportunities. This flexibility allows you to tailor your educational
journey to your interests and strengths, ensuring a well-rounded academic profile.</p>
                </div>
              </div>
              <div className='col-4'>
                <div className='studbg2 studbg'></div>
                <div>
                  <h3>Equivalent to a US High School Experience</h3>
                     {/* <h6 className='pt-3 pb-3'>(ages 5-11)</h6> */}
                     <p>Study in a programme that mirrors a US high school experience, enabling direct
applications to universities in the US and worldwide without TOEFL. Enjoy seamless
transitions into international higher education.</p>
                </div>
              </div>
              <div className='col-4'>
                <div className='studbg3 studbg'></div>
                <div>
                  <h3>Formative Assessments and Reduced Exam Pressure</h3>
                     {/* <h6 className='pt-3 pb-3'>(ages 12-18)</h6> */}
                     <p>Focus on continuous learning with formative assessments based on classwork and
assignments. This approach emphasizes overall performance, reducing the stress of
poor summative results.</p>
                </div>
              </div>
              <div className='col-4 mt-3 mb-4'>
                <button className='btn border-0 text-white fs-5 rounded-5 ps-3 pe-3 ' style={{ backgroundColor: 'orange' }} 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                >Learn more about programmes</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Syllabus