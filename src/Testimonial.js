import React from 'react'

const Testimonial = () => {
  return (
    <div className='container-fluid bg-test'>
        <div className='row pt-5 text-center mt-5 align-items-center justify-content-center'>
            <h1>Testimonials</h1>
            <h4 className='mt-3'>What is The Nest School&#39;s US High School Diploma Programme?</h4>
            <div className='col-7 mt-5 mb-5 row align-items-center justify-content-around'>
                <div className='col-3 test-avatar ava1'></div>
                <div className='col-9 rounded-3 bg-testimonials'>
                    <p className='p-3'>I like that Nest incorporates both Montessori and the kindergarten pattern together so kids have the advantage of both worlds. 
                        As soon as my daughter joined Nest, the teachers made her very comfortable. They are very understanding, cater to even the smallest 
                        needs of the child and have done a great job at teaching kids about how to be socially responsible. </p>
                </div>
            </div>
            <div className='col-7 mb-5 row align-items-center justify-content-around'>
                <div className='col-9 rounded-3 bg-testimonials'>
                    <p className='p-3'>We’ve been amazed at how the school is just growing from strength to strength. I was blown away by the campus tour. First is that feeling of space that you get – it’s bright, airy and very well put together. We were very happy to see the classrooms and bright colours. 

</p>
                </div>
                <div className='col-3 test-avatar ava2'></div>

            </div>
        </div>
    </div>
  )
}

export default Testimonial