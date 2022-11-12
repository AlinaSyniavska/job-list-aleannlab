import {FC, useCallback, useRef} from "react";
import {GoogleMap, Marker} from "@react-google-maps/api";

import {ILocation} from "../../interfaces/location.interface";
import {defaultTheme} from './Theme';

interface IProps {
    location: ILocation,
}

const containerStyle = {
    width: '402px',
    height: '436px'
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

const Map: FC<IProps> = ({location}) => {
    const {lat, long} = location;

    const center = {
        lat: lat,
        lng: long
    };
/*    const center = {
        lat: 47.374280,
        lng: 8.540880
    };*/

    const mapRef = useRef(undefined);

    const onLoad = useCallback(function callback(map: any) {
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback(function callback(map: any) {
        mapRef.current = undefined;
    }, [])

    return (
        <div>
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