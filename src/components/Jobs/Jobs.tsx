import {FC, useEffect, useState} from "react";

import {IJob} from "../../interfaces";
import {jobService} from "../../services";
import {Job} from "../Job/Job";
import {useLocation, useSearchParams} from "react-router-dom";

interface IProps {
    activePage: number,
    setActivePage: any,
}

const Jobs: FC<IProps> = ({activePage, setActivePage}) => {
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
    }, [query, pathname])

    useEffect(() => {
        setActivePage(Number(query.get('page') || '1'));
    }, [state])

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