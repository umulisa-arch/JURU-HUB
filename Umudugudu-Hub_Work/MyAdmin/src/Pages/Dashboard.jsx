import React from 'react'
import './admindash.css'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


function Dashboard() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
    <div><h2 data-aos="fade-down" className='h2dashpage'>Welcome to </h2>
    <h1 data-aos="fade-up" className='h1dashpage'>UMUDUGUDU-HUB</h1>
    </div>
    </>
  )
}
export default Dashboard
