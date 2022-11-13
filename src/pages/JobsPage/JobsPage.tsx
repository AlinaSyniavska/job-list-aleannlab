import {FC, useEffect, useState} from "react";
import {Jobs, PaginationComp} from "../../components";

const JobsPage: FC = () => {

    const [activePage, setActivePage] = useState<number>(1);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <div className={"wrap"}>
            <Jobs activePage={activePage} setActivePage={setActivePage}/>
            <div className={"pagination"}>
                <PaginationComp activePage={activePage} setActivePage={setActivePage}/>
            </div>
        </div>
    );
};

export {JobsPage};