import {FC} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
    faBookmark,
} from "@fortawesome/free-regular-svg-icons";

import {IJob, IRating} from "../../interfaces";
import {helper} from "../../helpers";
import {StarRating} from "../StarRating/StarRating";

interface IProps {
    job: IJob,
}

const Job: FC<IProps> = ({job}) => {
    const {name, pictures, title, address, createdAt} = job;

    const rating: IRating = {
        defaultValue: helper.getRandomIntInclusive(1, 5),
        size: 'xs',
        readOnly: true,
    }

    return (
        <div>
            <div className={"jobItem"}>
                <div className={"jobImage"}>
                    <img src={pictures[0]} alt={name}/>
                </div>

                <div className={"jobInfoContainer"}>

                    <div className={"jobMainInfo"}>
                        <div className={"jobMainInfo_title"}>{title}</div>
                        <div className={"jobMainInfo_company"}>{name}</div>
                        <div className={"jobMainInfo_address"}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <span>{address}</span>
                        </div>
                    </div>

                    <div className={"jobSecondaryInfo"}>

                        <div className={"jobRating"}>
                            <StarRating ratingProps={rating}/>
                        </div>

                        <div className={"jobServiceInfo"}>
                            <FontAwesomeIcon icon={faBookmark} style={{fontSize: '20px'}}/>
                            <div className={"jobServiceInfo_createAt"}>
                                <p>Posted {helper.getDiffDate(createdAt as any)} days
                                    ago</p>
                                <p>{new Date(createdAt).toLocaleDateString('en-GB')}</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export {Job};