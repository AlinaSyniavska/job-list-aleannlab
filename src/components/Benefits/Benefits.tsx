import {FC} from "react";

interface IProps {
    benefits: string[],
}

const Benefits: FC<IProps> = ({benefits}) => {
    return (
        <div className={"addInfo"}>
            <p className={"jobDetailsText"}>Benefits</p>
            <div>
                {
                    benefits.map((item, index) => <div className={"jobDetailsBenefits"} key={index}>{item}</div>)
                }
            </div>
        </div>
    );
};

export {Benefits};