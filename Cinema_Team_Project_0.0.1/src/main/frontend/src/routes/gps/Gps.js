import { useEffect, useRef, useState } from 'react';

 function useReverseGeoCoding({ latitude, longitude }) {
  const [address, setAddress] = useState('');
  const latestRequestIdRef = useRef(null);

  useEffect(() => {
    // 최신 요청임을 구분하기 위한 변수
    const requestId = Date.now();
    latestRequestIdRef.current = requestId;

    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder(); // geocoder 설정

      // 2. coord2Address가 실행되며 콜백으로 실행시킬 reverseGeocoding 함수
      // geoding 돌릴 함수 -> 파라미터에는 응답으로 받아올 것들의 타입넣기
      const reverseGeocoding = async (res, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          if (latestRequestIdRef.current === requestId) {
            // 통신 상태, 최신 요청임을 모두 만족할 때 주소값 상태변경
            await setAddress(res[0].address.address_name);
          }
        } else {
          console.error('주소 변환 실패!');
        }
      };

      // 1. 위도, 경도 모두 잘 넘어왔을 때 coord2Address 실행!
      if (latitude !== undefined && longitude !== undefined) {
        geocoder.coord2Address(Number(longitude), Number(latitude), reverseGeocoding);
      }
    });
  }, [placeId]);

  return { address };
}

function Mymaap(){
  return(
    <div></div>
  )
}

export default Mymaap;