import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

interface IProps {
    icon: IconDefinition,
    children: string,
    fontSize: string,
}

const Bookmark: FC<IProps> = ({icon, children, ...arg}) => {
    return (
        <div className={"bookmark"}>
            <FontAwesomeIcon icon={icon} style={{...arg}}/>
            <span>{children}</span>
        </div>
    );
};

export {Bookmark};