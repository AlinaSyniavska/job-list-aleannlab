import {FC} from "react";
import {Link} from "react-router-dom";

interface IProps {
    to: string,
    children: string,
    className: string,
}

const Button:FC<IProps> = ({to, children, ...arg}) => {
    return (
        <Link to={to}>
            <button {...arg}>{children}</button>
        </Link>
    );
}

export {Button};