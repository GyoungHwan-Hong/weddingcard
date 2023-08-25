import './App.css';
import React from 'react';
import Location from './location';
import PhotoAlbum from "react-photo-album"
import { Linking } from 'react-native'

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
      <div style={{ background: "#FCD8D4", height: "100vh", backgroundImage: `url(/img/main.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
        <h1 style={{ color: "white", margin: '0px' }}>
          <br />
          안녕하세요.<br />
          저희가 결혼합니다.
        </h1>
        <p style={{ color: "white" }}>
          2023년 10월 15일 일요일 12시
        </p>
        <p style={{ color: "white" }}>
          서울특별시 용산구 소월로 302 앨리스몽드
        </p>
      </div>

      <div style={{ height: "500px", fontSize: "15px", fontFamily: 'Noto Serif KR', display: 'flex'}}>
        <div style={{ height: '400px', textAlign: 'center', padding: 'auto'}}>
        "<br />
        저희 두 사람, <br />
        <br />
        신선한 바람에 사랑이 묻어나는 계절인 올 가을에<br />
        <br />
        소중한 분들의 축복을 받으며<br />
        <br />
        사랑의 결실을 이루려 합니다.<br />
        <br />
        따듯한 마음으로 축하해 주시면 감사하겠습니다.<br />
        "<br />
        </div>
      </div>

      <div style={{ background: "#F0DBDB", margin: '0px', padding: '20px' }}>
        <span style={{ fontSize: '20px' }}>홍석길 심미경</span><span>의 장남</span>
        <br />
        <p style={{ fontSize: '25px' }}>홍경환</p>
        <span style={{ fontSize: '20px' }}>이종호 엄은희</span><span>의 장녀</span>
        <br />
        <p style={{ fontSize: '25px' }}>이현경</p>
      </div>
      <PhotoAlbum layout="rows" photos={firstRowPhotos} />
      <PhotoAlbum layout="rows" photos={secondRowPhotos} />
      <p>
        오시는 길
      </p>
      <Location />
      <p>
        서울 특별시 용산구 소월로 302
      </p>

      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>신랑에게 연락하기</p>
          <button onPress={() => Linking.openURL(`sms:7788787206`)}>KakaoTalk</button>
          <button> Toss </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>신부에게 연락하기</p>
          <button> KakaoTalk</button>
          <button> Toss </button>
        </div>
      </div>


      <div>
        <p style={{fontSize: '25px'}}>마음 전하실 곳</p>
      </div>

      <div>
        <p>
          <span>신랑 </span> <span style={{fontSize: '25px'}}> 홍경환 </span>
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>

          <a href="https://qr.kakaopay.com/Ej7vEx8PX">
            <img src='/img/payment_icon_yellow_medium.png' alt="kakaopay" />
          </a>
        </div>
        <p>
        <span>신부 </span> <span style={{fontSize: '25px'}}> 이현경 </span>
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>

          <a href="https://qr.kakaopay.com/Ej8ZN4qpM">
            <img src='/img/payment_icon_yellow_medium.png' alt="kakaopay" />
          </a>
        </div>

      </div>


      <div>
        <p style={{fontSize: '25px'}}>공유하기</p>
      </div>
      <div>
        <button>Copy</button> <button> KakaoTalk </button>
      </div>


    </div>
  );
}

export default App;
