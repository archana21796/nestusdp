
import React, { useState } from 'react';

const Management = () => {
    const [playVideo1, setPlayVideo1] = useState(false);
    const [playVideo2, setPlayVideo2] = useState(false); 

  return (
    <div>
        <div className='container-fluid bg-management'>
            <div className='row align-items-center justify-content-center'>
                <h2 className='col-10 text-center pt-4'>How We Give your Child
                     a Competitive Edge in a Globalised World </h2>
                     <p className='fs-5 col-9 pt-4'>Why Choose The Nest School&#39;s US High School Diploma Programme?
                        &quot;Unlock Your Potential with Flexibility, Global Recognition, and Academic
                        Excellence&quot;</p>
                <div className='col-12 row align-items-center justify-content-center'>
                <div className="col-12 col-lg-4">
                    <div className="video-container" onClick={() => setPlayVideo1(true)} style={{ cursor: 'pointer' }}>
                    {playVideo1 ? (
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/ny6dUArv54g?autoplay=1"
                        title="YouTube Video 1"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                    ) : (
                    <img className='styleimg'
                        src="https://img.youtube.com/vi/ny6dUArv54g/hqdefault.jpg"
                        alt="Thumbnail 1"
                        // style={{ width: '100%', height : '100%' }}
                    />
                    )}
                    </div>
                    <p className='pt-2 pb-2 text-center fs-5'>Consistent and reliable educational resources ensure stability, regardless of faculty
                    changes.</p>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="video-container" onClick={() => setPlayVideo2(true)} style={{ cursor: 'pointer' }}>
                    {playVideo2 ? (
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/TtctZ1JQWyA?autoplay=1"
                        title="YouTube Video 2"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                    ) : (
                    <img className='styleimg'
                        src="https://img.youtube.com/vi/TtctZ1JQWyA/hqdefault.jpg"
                        alt="Thumbnail 2"
                        // style={{ width: '100%' }}
                    />
                    )}
                    <p className='pt-2 pb-2 text-center fs-5'>Learn at your own pace with online resources and a hybrid model, perfect for self-
                    directed learning.</p>
                    </div>
                </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 col-xxl-3 col-xxxl-2 ps-5 border mt-3 mb-4'>
                <button className='btn border text-white rounded-5 fs-5 ps-3 pe-3 ' style={{ backgroundColor: 'orange' }} 
                onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >Learn more about programmes</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Management