import {FC, useEffect, useState} from "react";
import {useJsApiLoader} from "@react-google-maps/api";

import {IFeatureProperties, IJob} from "../../interfaces";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../Button/Button";
import {helper} from "../../helpers";
import {EmploymentType} from "../EmploymentType/EmploymentType";
import {Benefits} from "../Benefits/Benefits";
import {Bookmark} from "../Bookmark/Bookmark";
import {Map} from "../Map/Map";
import {API_KEY} from "../../constants";
import {geocodingService} from "../../services";

interface IProps {
    jobDetails: IJob,
}

const JobDetails: FC<IProps> = ({jobDetails}) => {
    const {
        title,
        createdAt,
        salary,
        description,
        benefits,
        employment_type,
        pictures,
        name,
        location,
        email,
        phone
    } = jobDetails;

    const [address, setAddress] = useState<Partial<IFeatureProperties>>({});

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY as string,
    })

    useEffect(() => {
        geocodingService.getAddress(location.lat, location.long).then(({data}) => setAddress(data.features[0].properties));
    }, [])

    return (
        <div className={"singleJobContainer"}>
            <div className={"jobDetailsContainer"}>

                <div className={"jobDetailsHeader"}>
                    <p className={"jobDetailsTitle"}>Job Details</p>
                    <div className={"jobDetailsBookmark"}>
                        <Bookmark icon={faBookmark} fontSize={'20px'} children={'Save to my list'}/>
                        <Bookmark icon={faShareNodes} fontSize={'20px'} children={'Share'}/>
                    </div>
                </div>

                <div className={"btnApply mobile"}>
                    <Button to={'/'} children={'APPLY NOW'}
                            className={"py-4 px-7 bg-[#384564] text-white font-bold rounded-lg tracking-wide"}/>
                </div>

                <div className={"jobDetailsPart1 desktop"}>
                    <div className={"part1"}>
                        <div className={"jobDetailsName"}>{title}</div>
                        <div
                            className={"jobDetailsText jobDetailsCreatedAt"}>Posted {helper.getDiffDate(createdAt as any)} days
                            ago
                        </div>
                    </div>
                    <div className={"jobDetailsSalary"}>
                        <p className={"jobDetailsBoldText"}>{helper.formatNumbersAsCurrency(salary)}</p>
                        <p className={"jobDetailsText"}>Brutto, per year</p>
                    </div>
                </div>

                <div className={"jobDetailsPart1 mobile"}>
                    <div className={"jobDetailsName"}>{title}</div>
                    <div className={"part1"}>
                        <div className={"jobDetailsSalary"}>
                            <p className={"jobDetailsBoldText"}>{helper.formatNumbersAsCurrency(salary)}</p>
                            <p className={"jobDetailsText"}>Brutto, per year</p>
                        </div>
                        <div
                            className={"jobDetailsText jobDetailsCreatedAt"}>Posted {helper.getDiffDate(createdAt as any)} days
                            ago
                        </div>
                    </div>
                </div>

                <div className={"jobDetailsPart2"}>
                    <div className={"jobDetailsText"}>{description}</div>
                    <div>
                        <p className={"jobDetailsBoldText"}>Compensation & Benefits:</p>
                        <ul>
                            {
                                benefits.map((item, index) => <li className={"jobDetailsText"}
                                                                  key={index}>{item}</li>)
                            }
                        </ul>
                    </div>
                </div>

                <div className={"btnApply mobileCenter"}>
                    <Button to={'/'} children={'APPLY NOW'}
                            className={"py-4 px-7 bg-[#384564] text-white font-bold rounded-lg tracking-wide"}/>
                </div>

                <div className={"jobDetailsPart3"}>
                    <div className={"jobDetailsAdditional"}>
                        <p className={"jobDetailsTitle"}>Additional info</p>
                        <EmploymentType employment={employment_type}/>
                        <Benefits benefits={benefits}/>
                    </div>

                    <div className={"jobDetailsAttached"}>
                        <p className={"jobDetailsTitle"}>Attached images</p>
                        <div className={"jobDetailsImg"}>
                            {
                                pictures.map((item, index) => <img key={index}
                                                                   src={`${item}?random=${Math.floor(Math.random() * 100) + 1}`}
                                                                   alt={`${name} photo${index + 1}`}/>)
                            }
                        </div>
                    </div>
                </div>

                <div className={"btnReturn mobile"}>
                    <Button to={'/'} children={'< RETURN TO JOB BOARD'}
                             className={"py-4 px-7 bg-[#E4E5EA] text-[#384564] font-bold rounded-lg tracking-wide mt-24"}/>
                </div>

            </div>

            <div className={"jobMapContainer"}>
                <p className={"jobDetailsTitle"}>Contacts</p>
                {
                    isLoaded ? <Map
                        location={location}
                        name={name}
                        address={address.formatted as string}
                        phone={phone}
                        email={email}
                    /> : <h2>Loading...</h2>
                }
            </div>
        </div>
    );
};

export {JobDetails};