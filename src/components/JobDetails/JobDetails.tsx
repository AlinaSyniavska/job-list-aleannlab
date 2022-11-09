import {FC} from "react";

import {IJob} from "../../interfaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../Button/Button";
import {helper} from "../../helpers";
import {EmploymentType} from "../EmploymentType/EmploymentType";
import {Benefits} from "../Benefits/Benefits";

interface IProps {
    jobDetails: IJob,
}

const JobDetails: FC<IProps> = ({jobDetails}) => {

    const {title, createdAt, salary, description, benefits, employment_type, pictures, name} = jobDetails;

    return (
        <div>
            <div className={"singleJobContainer"}>
                <div className={"jobDetailsContainer"}>

                    <div className={"jobDetailsHeader"}>
                        <p className={"jobDetailsTitle"}>Job Details</p>
                        <div className={"jobDetailsBookmark"}>
                            <div className={"bookmark"}>
                                <FontAwesomeIcon icon={faBookmark} style={{fontSize: '20px'}}/>
                                <span>Save to my list</span>
                            </div>
                            <div className={"bookmark"}>
                                <FontAwesomeIcon icon={faShareNodes} style={{fontSize: '20px'}}/>
                                <span>Share</span>
                            </div>
                        </div>
                    </div>

                    <div className={"btnApply"}>
                        <Button to={'/'} children={'APPLY NOW'}
                               className={"py-4 px-7 bg-[#384564] text-white font-bold rounded-lg tracking-wide"}/>
                    </div>

                    <div className={"jobDetailsPart1"}>
                        <div>
                            <div className={"jobDetailsTitle"}>{title}</div>
                            <div className={"jobDetailsCreatedAt"}>Posted {helper.getDiffDate(createdAt as any)} days
                                ago</div>
                        </div>
                        <div className={"jobDetailsSalary"}>
                            {helper.formatNumbersAsCurrency(salary)}
                            <p>Brutto, per year</p>
                        </div>
                    </div>

                    <div className={"jobDetailsPart2"}>
                        <div className={"jobDetailsDescription jobDetailsText"}>{description}</div>
                        <div>
                            <p>Compensation & Benefits:</p>
                            {
                                benefits.map((item, index) => <li className={"jobDetailsText"} key={index}>{item}</li>)
                            }
                        </div>
                    </div>

                    <div className={"btnApply"}>
                        <Button to={'/'} children={'APPLY NOW'}
                                className={"py-4 px-7 bg-[#384564] text-white font-bold rounded-lg tracking-wide"}/>
                    </div>

                    <div className={"jobDetailsAdditional"}>
                        <p className={"jobDetailsTitle"}>Additional info</p>
                        <EmploymentType employment={employment_type}/>
                        <Benefits benefits={benefits}/>
                    </div>

                    <div className={"jobDetailsAttached"}>
                        <p className={"jobDetailsTitle"}>Attached images</p>
                        <div className={"jobDetailsImg"}>
                            {
                                pictures.map((item, index) => <img key={index} src={`${item}`} alt={`${name} photo${index+1}`}/>)
                            }
                        </div>
                    </div>

                    <Button to={'/'} children={'< RETURN TO JOB BOARD'}
                            className={"py-4 px-7 bg-[#E4E5EA] text-[#384564] font-bold rounded-lg tracking-wide"}/>

                </div>

                <div className={"jobMapContainer"}>

                </div>
            </div>
        </div>
    );
};

export {JobDetails};