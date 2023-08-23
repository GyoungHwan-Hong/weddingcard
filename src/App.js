import './App.css';
import React from 'react';
import Location from './location';
import PhotoAlbum from "react-photo-album"

const firstRowPhotos = [
  { src: "/img/1.jpg", width: 100, height: 100 },
  { src: "/img/2.jpg", width: 100, height: 100 },
  { src: "/img/3.jpg", width: 100, height: 100 },
  { src: "/img/4.jpg", width: 100, height: 100 },
  { src: "/img/5.jpg", width: 100, height: 100 },
];
const secondRowPhotos = [
  { src: "/img/5.jpg", width: 100, height: 100 },
  { src: "/img/4.jpg", width: 100, height: 100 },
  { src: "/img/3.jpg", width: 100, height: 100 },
  { src: "/img/2.jpg", width: 100, height: 100 },
  { src: "/img/1.jpg", width: 100, height: 100 },
];

function App() {
  return (
    <div className="App">
        <p>
          안녕하세요. 
          저희가 결혼합니다.
        </p>
        <p>
          2023년 10월 15일 일요일 12시
        </p>
        <p>
          서울특별시 용산구 소월로 302 앨리스몽드
        </p>
        <h1>
          홍석길 심미경의 장남 홍경환
        </h1>
        <h1>
          이종호 엄은희의 장녀 이현경
        </h1>
        <PhotoAlbum layout="rows" photos={firstRowPhotos} />
        <PhotoAlbum layout="rows" photos={secondRowPhotos} />
        <p>
          오시는 길
        </p>
        <Location />
        <p>
          서울 특별시 용산구 소월로 302
        </p>

        <p>
          신랑에게 연락하기
        </p>
        <p>
          신부에게 연락하기
        </p>

        <p>신랑 신부에게 마음 전하기</p>
        <p>신랑측 마음</p>
        <p>신부측 마음</p>


        <p>공유하기</p>
    </div>
  );
}

export default App;
