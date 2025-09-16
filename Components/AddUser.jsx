import React, { useState } from 'react';
import '../Components/Adduser.css';

const AddUser = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    regno: '',
    name: '',
    batch: '',
    dept_id: 1001, 
    mobileno: '',
    dob: '',
    stream: '',
    email: '',
  });

  function HandleClose() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/api/students',
        {  method: 'POST', headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Sucess")
        setIsOpen(false);
        window.location.reload();
        alert("Sucess ...!")



    setFormData({
      regno: '',
      name: '',
      batch: '',
      dept_id: 1001,
      mobileno: '',
      dob: '',
      stream: '',
      email: '',
        });

      } 
      
      else {
        console.log('Error')
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="Adder"
    style={{ display: isOpen ? 'block' : 'none' }}>


      <div className="Adder_head">


        <div>
    <h3>New Application</h3>
        </div>
<div className='adder_div_2'>
<button onClick={handleSubmit}>Submit</button>
    <span onClick={HandleClose}>
<i className="fa-solid fa-xmark"></i>
</span></div>
      </div>

      <div className="Adder_body">
        <label>Reg No</label>
        <input
          type="number" name="regno" value={formData.regno} onChange={handleChange}/>

        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>DOB</label>
        <input
          type="date" name="dob" value={formData.dob} onChange={handleChange}  />

        <label>Mobile</label>
        <input type="number"  name="mobileno" value={formData.mobileno} onChange={handleChange}/>

        <label>Batch</label>
        <input type="number" name="batch" value={formData.batch}  onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Stream</label>
        <input type="text" name="stream" value={formData.stream} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default AddUser;
