import NavBar from "../components/NavBar"
import React, { useState, useEffect } from "react"
import api from "../helpers/axiosConfig"
import SideBar from "../components/SideBar"
import { useAuth0 } from "@auth0/auth0-react"
import JobList from "../components/JobList"

function Dashboard() {
    const { user } = useAuth0()
    const [jobsApplied, setJobsApplied] = useState([]);
    
    useEffect(() => {
        const test = "Hello World";
        setJobsApplied([test]);
      }, [user]);
    
    return (
        <div>
            <NavBar />
            <SideBar jobsApplied={jobsApplied}/>
            <JobList jobsApplied={jobsApplied}/>
        </div>
    )
}

export default Dashboard
