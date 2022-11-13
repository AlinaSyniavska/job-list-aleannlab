import {FC, useCallback, useRef} from "react";
import {GoogleMap, Marker} from "@react-google-maps/api";

import {ILocation} from "../../interfaces/location.interface";
import {defaultTheme} from './Theme';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

interface IProps {
    location: ILocation,
    name: string,
    address: string,
    phone: string,
    email: string,
}

const containerStyle = {
    width: '402px',
    height: '220px',
    borderRadius: '0 0 8px 8px'
};

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: defaultTheme
}

const Map: FC<IProps> = ({location, name, email, phone, address}) => {
    const {lat, long} = location;

    const center = {
        lat: lat,
        lng: long
    };

    const mapRef = useRef(undefined);

    const onLoad = useCallback(function callback(map: any) {
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback(function callback(map: any) {
        mapRef.current = undefined;
    }, [])

    return (
        <div>
            <div className={"mapDescription"}>
                <div>
                    <p className={"mapTitle"}>Department name. </p>
                    <p className={"mapTitle"}>{name}</p>
                </div>
                <div>
                    <p className={"mapBaseInfo"}>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{address}</span>
                    </p>
                </div>
                <div>
                    <p className={"mapBaseInfo"}>{phone}</p>
                    <p className={"mapBaseInfo"}>{email}</p>
                </div>
            </div>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                <Marker position={center}/>


            </GoogleMap>
        </div>
    );
};

export {Map};