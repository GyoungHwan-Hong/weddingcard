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
        </p>
        <p>
          10월 15일 일요일 12시
        </p>
        <p>
          서울특별시 용산구 소월로 302
        </p>
        <p>
          앨리스몽드
        </p>
        <h1>
          홍경환, 이현경
        </h1>
        <h1>
          결혼합니다.
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
    </div>
  );
}

export default App;
