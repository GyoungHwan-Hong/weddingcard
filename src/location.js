/*global kakao*/
import React, { useEffect } from 'react'


const Location = () => {
    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);

        var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch('서울특별시 용산구 소월로 302', function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            var infowindows = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">앨리스몽드</div>'
            });
            infowindows.open(map, marker);

            map.setCenter(coords);
        }

    });


    }, [])


    return (
        <div style={{display: "flex", justifyContent: "center" }}>
            <div id="map" style={{ border: "5px solid #d5bdaf", width: "300px", height: "300px"}}></div>
        </div>
    )
}

export default Location;