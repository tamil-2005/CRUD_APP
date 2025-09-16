import React, { useEffect, useState } from 'react';
import '../Components/DashboardData.css';
import AddUser from './AddUser';


const DashboardData = () => {


    const URL = 'http://localhost:9000/api/students';

    const [data, setData] = useState([]);

    const [status,setStates]=useState(true)


    const [isOpen, setIsOpen] = useState(false);

     const [searchReg, setSearchReg] = useState('');
     const [searchName, setSearchName] = useState('');
     const [searchMobile, setSearchMobile] = useState('');



    const filteredData = data.filter(student =>
        student.regno.toString().includes(searchReg)&&
        student.name.toLowerCase().includes(searchName.toLowerCase())&&
        student.mobileno.toString().includes(searchMobile)


    );
    

    


  const handleToggle = () => {
    setIsOpen(true); 
  };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const result = await response.json();
                setData(result);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();

    }, []);


        const handleDelete = async (regno) => {
        try {
            await fetch(`${URL}/regno/${regno}`, { method: 'DELETE' });
            setData(data.filter(student => student.regno !== regno));
        } catch (e) {
            console.error(e);
        }
    };









    return (
        <>


 <div className="Dash_container">
    <div className="head_container">
     <div className='div_1'>
      <input type="number" name="Reg" placeholder='Reg no' value={searchReg} onChange={(e) => setSearchReg(e.target.value)} />
           <input type="text" name="Name" placeholder='Name' value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
            <input type="text" name="Mobile" placeholder='Mobile' value={searchMobile} onChange={(e) => setSearchMobile(e.target.value)} />
            <select name="sortBy" id="sortBy">
                    <option value="">All</option>
                    <option value="">Active</option>
                    <option value="asc">NON Active</option>
                    </select>
                    </div>

                    
    <div className='div_2'>
    <button onClick={handleToggle}>New Applicant</button>
           </div>
     </div>



   <table>

<thead>        
  <tr>
    <th>REG NO</th>
    <th>Status</th>
    <th>Name</th>
    <th>DOB</th>
    <th>Mobile</th>
    <th>Batch</th>
    <th>Email</th>
    <th>Stream</th>
    <th>EDIT</th>
    </tr>

</thead>


 <tbody>
    {filteredData.map((student) => (
        <tr key={student.regno}>
            <td>{student.regno}</td>
            <td>{status === true ? 'Active' : 'Non Active'}</td>
            <td>{student.name}</td>
            <td>{student.dob}</td>
            <td>{student.mobileno}</td>
            <td>{student.batch}</td>
            <td>{student.email}</td>
            <td>{student.stream}</td>
            <td>
            <span onClick={()=>HandeleEdit}>
                <i class="fa-solid fa-pen-to-square"></i>
                </span>
            <span onClick={() => handleDelete(student.regno)}>
                <i class="fa-solid fa-trash"></i>
            </span>
            </td>
        </tr>
    ))}
</tbody>
    </table>
            </div>


            <AddUser isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
};

export default DashboardData;
