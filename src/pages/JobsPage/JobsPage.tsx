import {FC, useState} from "react";
import {Jobs, PaginationComp} from "../../components";

const JobsPage: FC = () => {

    const [activePage, setActivePage] = useState<number>(1);

    return (
        <div className={"wrap"}>
            <Jobs activePage={activePage}/>
            <div className={"pagination"}>
                <PaginationComp activePage={activePage} setActivePage={setActivePage}/>
            </div>
        </div>
    );
};

export {JobsPage};