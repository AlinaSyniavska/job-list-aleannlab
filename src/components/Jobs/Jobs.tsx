import {FC, useEffect, useState} from "react";

import {IJob} from "../../interfaces";
import {jobService} from "../../services";
import {Job} from "../Job/Job";

const Jobs: FC = () => {
    const [jobs, setJobs] = useState<IJob[]>([]);

    useEffect(() => {
        jobService.getAll().then(({data}) => setJobs(data))
    }, [])

    return (
        <div className={"wrap"}>
            <div className={"jobsContainer"}>
                {
                    jobs.map(job => <Job key={job.id} job={job}/>)
                }
            </div>
        </div>
    );
};

export {Jobs};