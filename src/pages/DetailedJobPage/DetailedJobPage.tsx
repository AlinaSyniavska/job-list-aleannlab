import {FC} from "react";

import {JobDetails} from "../../components";
import {useLocation} from "react-router-dom";

const DetailedJobPage: FC = () => {
    const {state} = useLocation();

    return (
        <div>
            <JobDetails jobDetails={state}/>
        </div>
    );
};

export {DetailedJobPage};