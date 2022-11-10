import {FC} from "react";

interface IProps {
    employment: string[],
}

const EmploymentType: FC<IProps> = ({employment}) => {
    return (
        <div className={"addInfo"}>
            <p className={"jobDetailsText"}>Employment type</p>
            <div>
                {
                    employment.map((item, index) => <div className={"jobDetailsEmployment"} key={index}>{item}</div>)
                }
            </div>
        </div>
    );
};

export {EmploymentType};