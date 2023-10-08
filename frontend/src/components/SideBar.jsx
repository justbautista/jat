import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"

export default function SideBar(jobsApplied) {
    const { user } = useAuth0()
    const [stats, setStats] = useState({})
    console.log(jobsApplied)

    useEffect(() => {
        const getStats = () => {
            let countingJobs = {
                "applied": 0,
                "interviewing": 0,
                "accepted": 0,
                "rejected": 0,
            }
            
            if (jobsApplied["jobsApplied"]) {
                setStats(countingJobs)
                return
            }

            for (const job of jobsApplied) {
                if (job["jobsApplied"]["stage"] === "applied") {
                    countingJobs["applied"]++
                } else if (job["jobsApplied"]["stage"] === "accepted") {
                    countingJobs["accepted"]++
                } else if (job["jobsApplied"]["stage"] === "rejected") {
                    countingJobs["rejected"]++
                } else {
                    countingJobs["interviewing"]++
                }
            }
            setStats(countingJobs)
        }

        getStats()
    }, [jobsApplied])



    return (
        <div>
            <p>{user.name}</p>
            <p>Applied: {stats["applied"]}</p>
            <p>Interviewing: {stats["interviewing"]}</p>
            <p>Rejected: {stats["rejected"]}</p>
            <p>Accepted: {stats["accepted"]}</p>
        </div>
    )

    
}