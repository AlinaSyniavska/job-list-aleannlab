import {FC, useEffect} from "react";

import {JobDetails} from "../../components";
import {useLocation} from "react-router-dom";

const DetailedJobPage: FC = () => {
    const {state} = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <div>
            <JobDetails jobDetails={state}/>
        </div>
    );
};

export {DetailedJobPage};