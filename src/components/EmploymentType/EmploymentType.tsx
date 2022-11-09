import {FC} from "react";

interface IProps {
    employment: string[],
}

const EmploymentType: FC<IProps> = ({employment}) => {
    return (
        <div>
            <p className={"jobDetailsText"}>Employment type</p>
            {
                employment.map((item, index) => <div className={"jobDetailsEmployment"} key={index}>{item}</div>)
            }
        </div>
    );
};

export {EmploymentType};