import {FC} from "react";
import {Jobs, PaginationComp} from "../../components";

const JobsPage: FC = () => {
    return (
        <div className={"wrap"}>
            <Jobs/>
            <div className={"pagination"}>
                <PaginationComp/>
            </div>
        </div>
    );
};

export {JobsPage};