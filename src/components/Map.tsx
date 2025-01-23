'use client';

import React, { useEffect, useRef } from 'react';

// 1) window.kakao에 대한 타입 선언
declare global {
  interface Window {
    kakao: IKakao;
  }
}

// 2) 필요한 Kakao 관련 인터페이스 정의 (간단 버전)
interface IKakao {
  maps: {
    load(callback: () => void): void;
    LatLng: new (latitude: number, longitude: number) => IKakaoLatLng;
    Map: new (container: HTMLElement, options: IKakaoMapOptions) => IKakaoMap;
    Marker: new (options: IKakaoMarkerOptions) => IKakaoMarker;
    services: {
      Geocoder: new () => IKakaoGeocoder;
      Status: {
        OK: string;
      };
    };
  };
}

interface IKakaoLatLng {
  getLat(): number;
  getLng(): number;
}

interface IKakaoMapOptions {
  center: IKakaoLatLng;
  level: number;
}

interface IKakaoMap {
  setCenter(latlng: IKakaoLatLng): void;
}

// **빈 인터페이스 대신, 실제 메서드를 정의해 줍니다.**
interface IKakaoMarker {
  setMap(map: IKakaoMap | null): void;
  setPosition(position: IKakaoLatLng): void;
}

interface IKakaoMarkerOptions {
  map: IKakaoMap;
  position: IKakaoLatLng;
}

// 주소 검색 결과 인터페이스
interface IKakaoAddressSearchResult {
  x: string; // API 결과는 문자열 형태
  y: string; // API 결과는 문자열 형태
  address_name: string;
  // 그 외 필요한 필드...
}

interface IKakaoGeocoder {
  addressSearch(
    address: string,
    callback: (result: IKakaoAddressSearchResult[], status: string) => void
  ): void;
}

// 3) 컴포넌트 Props
interface MapProps {
  address: string;
}

// --------------------------------------

const Map = ({ address }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Kakao 지도 스크립트 로드 (autoload=false)
    const script = document.createElement('script');
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=YOUR_APP_KEY&libraries=services';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // window.kakao 로딩 후에 kakao.maps.load 호출
      window.kakao.maps.load(() => {
        if (!mapContainer.current) return;

        // 지도 생성
        const map = new window.kakao.maps.Map(mapContainer.current, {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        });

        // 주소 → 좌표 변환
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              parseFloat(result[0].y),
              parseFloat(result[0].x)
            );
            map.setCenter(coords);

            // 마커 생성
            new window.kakao.maps.Marker({
              map,
              position: coords,
            });
          } else {
            console.error('주소 변환 실패:', status);
          }
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [address]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',
      }}
    />
  );
};

export default Map;
