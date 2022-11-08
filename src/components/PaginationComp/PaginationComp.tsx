import {FC, useState} from "react";
import { Pagination } from "rsuite";
import {TypeAttributes} from "rsuite/esm/@types/common";

interface IProps {
    activePage: number,
    setActivePage: any,
}

const PaginationComp: FC<IProps> = ({activePage, setActivePage}) => {

    const [prev, setPrev] = useState<boolean>(true);
    const [next, setNext] = useState<boolean>(true);
    const [ellipsis, setEllipsis] = useState<boolean>(true);
    const [boundaryLinks, setBoundaryLinks] = useState<boolean>(true);
    // const [activePage, setActivePage] = useState<number>(1);
    const [size, setSize] = useState<TypeAttributes.Size>('lg');
    const [maxButtons, setMaxButtons] = useState<number>(5);
    const [total, setTotal] = useState<number>(200);
    const [limit, setLimit] = useState<number>(20);

    return (
        <div>
            <Pagination
                size={size}
                prev={prev}
                next={next}
                ellipsis={ellipsis}
                boundaryLinks={boundaryLinks}
                total={total}
                limit={limit}
                maxButtons={maxButtons}
                activePage={activePage}
                onChangePage={setActivePage}
            />
        </div>
    );
};

export {PaginationComp};