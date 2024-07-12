import { useState , useEffect } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps, InfoWindow, Marker } from 'react-naver-maps';

function MyMap() {
    const navermaps = useNavermaps()

    // useRef 대신 useState를 통해 ref를 가져옵니다.
    const [map, setMap] = useState(null)
    const [infowindow, setInfoWindow] = useState(null)
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
    function onSuccessGeolocation(position) {
        if (!map || !infowindow) return

        const location = new navermaps.LatLng(
            position.coords.latitude,
            position.coords.longitude,
        )
        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude, });
        map.setCenter(location)
        map.setZoom(16)

        console.log('Coordinates: ' + location.toString())
    }

    function onErrorGeolocation() {
        if (!map || !infowindow) return

        const center = map.getCenter()
        infowindow.setContent(
            '<div style="padding:20px;">' +
            '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
            'latitude: ' +
            center.lat() +
            '<br />longitude: ' +
            center.lng() +
            '</div>',
        )
        infowindow.open(map, center)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                onSuccessGeolocation,
                onErrorGeolocation,
            )
        } else {
            const center = map.getCenter()
            infowindow.setContent(
                '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
            )
            infowindow.open(map, center)
        }
    }

    useEffect(() => {
        if (!map || !infowindow) {
            return
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                onSuccessGeolocation,
                onErrorGeolocation,
            )
        } else {
            var center = map.getCenter()
            infowindow.setContent(
                '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
            )
            infowindow.open(map, center)
        }
    }, [map, infowindow])

    return (
        <NaverMap
            // uncontrolled
            defaultCenter={new navermaps.LatLng(37.5666805, 126.9784147)}
            defaultZoom={10}
            defaultMapTypeId={navermaps.MapTypeId.NORMAL}
            ref={setMap}
        >
            <Marker
                key={1}
                position={new navermaps.LatLng(location.latitude, location.longitude)}
                onClick={() => { alert('여기는 N서울타워입니다.'); }}
            />
            <InfoWindow ref={setInfoWindow} />
        </NaverMap>
    )
}


const MapContainer = () => (
    <MapDiv
        style={{
            width: '40%',
            height: '400px',
        }}
    >
        <MyMap />
    </MapDiv>
);

export default MapContainer;