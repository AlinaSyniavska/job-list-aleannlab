import {FC} from "react";

interface IProps {
    benefits: string[],
}

const Benefits: FC<IProps> = ({benefits}) => {
    return (
        <div>
            <p className={"jobDetailsText"}>Benefits</p>
            {
                benefits.map((item, index) => <div className={"jobDetailsBenefits"} key={index}>{item}</div>)
            }
        </div>
    );
};

export {Benefits};