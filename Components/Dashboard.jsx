import React from 'react'
import '../Components/Dashboard.css'
import DashboardData from './DashboardData'

const Dashboard = () => {



  function ReloadHandle(){
    window.location.reload();
  }


  return (
    <>
    
<div className="box">
        <div className="header">
       <div>
         <h3>Employee</h3>
       </div>
<div className='header_content'>
            <span name="refresh" onClick={ReloadHandle}><i class="fa-solid fa-arrows-rotate"></i></span>
<select name="sortBy" id="sortBy">
    <option value="">Filter</option>
    <option value="asc">#</option>
    <option value="desc">#</option>
</select>

<span><i class="fa-solid fa-ellipsis"></i></span>
</div>
    </div>


    <DashboardData/>
</div>
    </>
  )
}

export default Dashboard