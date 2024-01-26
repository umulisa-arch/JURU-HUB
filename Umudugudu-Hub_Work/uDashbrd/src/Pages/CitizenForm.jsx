 import React, {useState} from 'react'
 import { useEffect } from 'react';
 import AOS from 'aos';


import '../CitizenForm.css';
 
function CitizenForm() {

    

  return (
    <>
      <div className="msg1">
        Citizen registered!!!
      </div>
      <div className="msg2">
        Registration failed!!!
      </div>
      
    <div className='citizen-App' data-aos="fade-up">
    <h2 className='user-guide' data-aos="fade-right">Citizen Form</h2>
<form className="citizen-form">
  
    <h2>1. Individual Information</h2>
  <div className="citizen-form-group">

    <label htmlFor="fullnames" className='citizen-form-label'>FullNames:</label>
    <input type='text' className='citizen-form-control' name='fullNames' placeholder='your names .........' required />
  </div>

  <div className="citizen-form-group">
    <label htmlFor="dateOfBirth" className='citizen-form-label'>Date Of Birth:</label>
    <input type='date' className='citizen-form-control' name='dateOfBirth' />
  </div>

  <div className="citizen-form-group">
    <label htmlFor="placeOfBirth" className='citizen-form-label' >Place Of Birth:</label>
    <input type='text' className='citizen-form-control' name='placeOfBirth' placeholder='country of birth....'/>
  </div>


  <div className="citizen-form-group">
    <label htmlFor="nationalId" className='citizen-form-label'>National Id:</label>
    <input type='number' className='citizen-form-control' name='nationalId' placeholder='your national id....'  />
  </div>

  <div className="citizen-form-group">
    <label htmlFor="email" className='citizen-form-label'>Email:</label>
    <input type='text' className='citizen-form-control' name='email'placeholder='your email....' />
  </div>

  <div className="citizen-form-group">
    <label htmlFor="phone" className='citizen-form-label'>Phone:</label>
    <input type='number' className='citizen-form-control' name='phone' placeholder='your phone number....' />
  </div>


 
  
  <h2>2. Demographic Information</h2>
  <div className="citizen-form-group">
  <b><label htmlFor="gender" className='citizen-form-label'>Gender</label></b>
  </div>
  <div>
    <div className="citizen-check-box">
      <input type="radio" name="gender" value="male"  />
       <label htmlFor="male">Male</label>
    
    </div>
    <div>
    <input type="radio" name="gender" value="female"  />
       <label htmlFor="female">Female</label>

    </div>

   
    </div>


    <div className="citizen-form-group">
    <b><label htmlFor="maritalStatus" className='citizen-form-label'>MaritalStatus</label></b>
  </div>
  <div>
    <div>
      <input type="radio" name="maritalStatus" value="single"  />
       <label htmlFor="single">Single</label>
    
    </div>
    <div>
    <input type="radio" name="maritalStatus" value="married"  />
       <label htmlFor="married">Married</label>

    </div>

   
    </div>

   

    
    <h2>3. Residential Information</h2>
    <div className="citizen-form-group">
   <label htmlFor="isibo" className='citizen-form-label'>Isibo:</label>
    <input type='text' className='citizen-form-control' name='isibo' placeholder='isibo residence....' />
    
  </div>

   

    <div className="citizen-form-group">
    <b> <label htmlFor="tenure" className='citizen-form-label'>Tenure</label></b>
  </div>
  
    <div>
      <input type="radio" name="tenure" value="owned"   />
       <label htmlFor="owned">Owned</label>
    
    </div>
    <div>
    <input type="radio" name="tenure" value="rented"  />
       <label htmlFor="rented">Rented</label>

    </div>

   
    <h2>4. Citizenship and Immigration</h2>
    <div className="citizen-form-group">
    <label htmlFor="citizenshipStatus" className='xitizen-form-label'>Citizenship Status:</label>
    <input type='text' className='citizen-form-control' name='citizenshipStatus' placeholder='your citizenship status....' />
  </div>

  <div className="citizen-form-group">
    <label htmlFor="countryOfOrigin" className='citizen-form-label'>Country Of Origin:</label>
    <input type='text' className='citizen-form-control' name='countryOfOrigin' placeholder='country of origin....' />
  </div>

  <div className="citizen-form-group">
    <label htmlFor="immigrationStatus" className='citizen-form-label'>Immigration Status:</label>
    <input type='text' className='citizen-form-control' name='immigrationStatus'placeholder='country of origin....'  />
   
  </div>

  
    <h2>5. Employment and Occupation</h2>

    <div className="citizen-form-group">
    <label htmlFor="employmentStatus" className='citizen-form-label'>Employment Status:</label>
    <input type='text' className='citizen-form-control' name='employmentStatus' placeholder='your employment status....' />
 
  </div>
     
  <div className="citizen-form-group">
    <label htmlFor="occupation" className='citizen-form-label'>Occupation:</label>
    <input type='text' className='citizen-form-control' name='occupation'  placeholder='your occupation....'/>
  </div>

  

  <div className="citizen-form-group">
    <label htmlFor="industryOfWork" className='citizen-form-label'>Industry Of Work:</label>
    <input type='text' className='citizen-form-control' name='industryOfWork' placeholder='industry of work....' />
  </div>

 

 
  <h2>6. Household Amenities</h2>
  <div className="citizen-form-group">
        <b><label htmlFor="availabilityOfBasicAmenities" >Availability of basic amenities :</label></b>
        </div>
        <div>
          <div>
            <input type="checkbox" name="availabilityOfBasicAmenities" value="water"  />
            <label htmlFor="water">Water</label>
          </div>

          <div>
          <input type="checkbox" name="availabilityOfBasicAmenities" value="electricity" />
            <label htmlFor="electricity">Electricity</label>
          </div>

          <div>
          <input type="checkbox" name="availabilityOfBasicAmenities" value="sanitation"  />
            <label htmlFor="sanitation">Sanitation</label>
          </div>
        </div>
  

     
      <h2>7. Household Composition</h2>
      <div className="citizen-form-group">
      <label htmlFor="numberOfChildren"  className="citizen-form-label">Number Of Children:</label>
      <input type='number' className='citizen-form-control' name='numberOfChildren' placeholder='total number of children....'  />
       </div>
       <div className="citizen-form-group">
      <label htmlFor="numberOfHouseholdPeople"  className="citizen-form-label">Number Of people:</label>
      <input type='number' className='citizen-form-control' name='numberOfHouseholdPeople' placeholder='total number of people....' required />
      </div>
    <br />

  <div className="citizen=form-group">
    <button className="citizen-btn" onClick={() => console.log(formData)}  type="button">Submit</button>
  
   
   </div>
</form>
</div>

    </>
  )
}

export default CitizenForm
