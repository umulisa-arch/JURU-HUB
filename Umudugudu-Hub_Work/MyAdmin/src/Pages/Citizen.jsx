import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
// import { ImMenu2 } from "react-icons/im";
import { GrView } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './citizen.css'

 function Citizen() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='citizen-container'><h2 data-aos="fade-right" className='h2citizen'>CITIZEN MANAGEMENT</h2> <br />
    <div className='search-container'>
        <input className='input-citizen' type="search" name="searchUser" id="searchUsers" placeholder=" Search citizen..."/> 
        <span className='search-citizen'><IoIosSearch size={20}/></span>
    </div>
    <br />
    <div>
      <table>
        <tr>
          <th data-aos="fade-up">CitizenID</th>
          <th data-aos="fade-up">firstName</th>
          <th data-aos="fade-up">lastName</th>
          <th data-aos="fade-up">Email</th>
          <th data-aos="fade-up">action</th>
        </tr>
        <tr data-aos="fade-up">
                <td >
                    1
                </td>
                <td >
                    Agnes 
                </td>
                <td>
                RUKUNDO
                </td>
                <td >
                    agnesrukundo1198@gmail.com
                </td>
                <td>
                <div className='actionicons'>

                <Link to="/view-page" style={{ color: 'green' }}>
                     <GrView style={{ fontSize: '20px' }} />
                </Link>
                <Link to="/edit-citizen" style={{ color: 'blue' }}>
                      <MdModeEdit  style={{ fontSize: '20px' }}/>
                </Link>

                <FiDelete style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
                </div>
                </td>
                </tr>
                <tr data-aos="fade-up">
                <td>
                    2
                </td>
                <td>
                Vanessa 
                </td>
                <td>
                Rabie
                </td>
                <td>
                vanessarabie12@gmail.com
                </td>
                <td>
                <div className='actionicons'>

                <Link to="/view-page" style={{ color: 'green' }}>
                     <GrView style={{ fontSize: '20px' }} />
                </Link>
                <Link to="/edit-citizen" style={{ color: 'blue' }}>
                      <MdModeEdit  style={{ fontSize: '20px' }}/>
                </Link>

                <FiDelete style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
                </div>
                </td>
                </tr>
                <tr data-aos="fade-up">
                <td>
                    3
                </td>
                <td>
               SENGA 
                </td>
                <td>
                Juru
                </td>
                <td>
                sengajurukenytha@gmail.com
                </td>
                <td>
                <div className='actionicons'>
                <Link to="/view-page" style={{ color: 'green' }}>
                     <GrView style={{ fontSize: '20px' }} />
                </Link>

                  <Link to="/edit-citizen" style={{ color: 'blue' }}>
                      <MdModeEdit  style={{ fontSize: '20px' }}/>
                  </Link>

                  <FiDelete style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
                </div>
                </td>
                </tr>
                <tr data-aos="fade-up">
                <td>
                    4
                </td>
                <td>
                Vanessa 
                </td>
                <td>
                Rabie
                </td>
                <td>
                vanessarabie12@gmail.com
                </td>
                <td>
                <div className='actionicons'>
                <Link to="/view-page" style={{ color: 'green' }}>
               <GrView style={{ fontSize: '20px' }} />
                </Link>
                   <Link to="/edit-citizen" style={{ color: 'blue' }}>
                  <MdModeEdit  style={{ fontSize: '20px' }}/></Link>

                  <FiDelete style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
                </div>
                </td>
                </tr>
      </table>
    </div>

    </div>
  )
}
export default Citizen
