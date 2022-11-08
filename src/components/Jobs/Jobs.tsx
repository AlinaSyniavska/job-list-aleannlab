import {FC, useEffect, useState} from "react";

import {IJob} from "../../interfaces";
import {jobService} from "../../services";
import {Job} from "../Job/Job";
import {useLocation, useSearchParams} from "react-router-dom";

interface IProps {
    activePage: number,
}

const Jobs: FC<IProps> = ({activePage}) => {
    const [jobs, setJobs] = useState<IJob[]>([]);
    const {state, pathname} = useLocation();

    const [query, setQuery] = useSearchParams({
        page: `${activePage}`,
    });

    useEffect(() => {
        setQuery({
            page: `${activePage}`,
        });
    }, [activePage]);

    useEffect(() => {
        jobService.getAll().then(({data}) => setJobs(data))
        console.log('+++++++++++++++++++++')
    }, [query, pathname, state])


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