import React from 'react'
import "./User.css"
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { ImMenu2 } from "react-icons/im";
import { GrView } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


function User() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
  return (
    <>
        <div className='user-container'><h2 data-aos="fade-right" className='h2user'>USER MANAGEMENT</h2>
    <div><br />
    <div className='search-container'>
        <input className='input' type="search" name="searchUser" id="searchUsers" placeholder="Search user..."/> 
        <span className='search-icon'><IoIosSearch size={20}/></span>
    </div>
    <br />
    </div>
    <div>
        <table>
            <tr data-aos="fade-up">
            <th>UserID</th>
            <th>firstName</th>
            <th>lastNames</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
            <tr data-aos="fade-up">
                <td>
                    1
                </td>
                <td>
                    Agnes 
                </td>
                <td>
                RUKUNDO
                </td>
                <td>
                    agnesrukundo1198@gmail.com
                </td>
                <td>
                <div className='actions-icon'>
                        <Link to="/view-page" style={{ color: 'green' }}>
                        <GrView style={{ fontSize: '20px' }} />
                        </Link>
                        <Link to="/edit-user" style={{ color: 'blue' }}>
                        <MdModeEdit  style={{ fontSize: '20px' }}/></Link>
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
                <div className='actions-icon'>
                        <Link to="/view-page" style={{ color: 'green' }}>
                        <GrView style={{ fontSize: '20px' }} />
                        </Link>
                        <Link to="/edit-user" style={{ color: 'blue' }}>
                        <MdModeEdit  style={{ fontSize: '20px' }}/></Link>
                        <FiDelete style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
                </div>
                </td>
                </tr>
                <tr data-aos="fade-up">
                <td>
                    3
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
                <div className='actions-icon'>
                        <Link to="/view-page" style={{ color: 'green' }}>
                        <GrView style={{ fontSize: '20px' }} />
                        </Link>
                        <Link to="/edit-user" style={{ color: 'blue' }}>
                        <MdModeEdit  style={{ fontSize: '20px' }}/></Link>
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
                <td>Rabie</td>
                <td>
                    vanessarabie12@gmail.com
                </td>
                <td>
                <div className='actions-icon'>
                        <Link to="/view-page" style={{ color: 'green' }}>
                        <GrView style={{ fontSize: '20px' }} />
                        </Link>
                        <Link to="/edit-user" style={{ color: 'blue' }}>
                        <MdModeEdit  style={{ fontSize: '20px' }}/></Link>
                        <FiDelete style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
                </div>
                </td>
                </tr>
        </table>
        </div>
        </div>
    </>

  )
}
export default User
