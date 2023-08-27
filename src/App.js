import './App.css';
import React from 'react';
import Location from './location';
import PhotoAlbum from "react-photo-album"
import Lightbox from "yet-another-react-lightbox";
import { Linking } from 'react-native'
import { Button } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

import "yet-another-react-lightbox/styles.css";

const firstRowPhotos = [
  { src: "/img/1.jpg", width: 100, height: 100 },
  { src: "/img/2.jpg", width: 100, height: 100 },
  { src: "/img/3.jpg", width: 100, height: 100 },
  { src: "/img/4.jpg", width: 100, height: 100 },
  { src: "/img/5.jpg", width: 100, height: 100 },
  { src: "/img/5.jpg", width: 100, height: 100 },
  { src: "/img/4.jpg", width: 100, height: 100 },
  { src: "/img/3.jpg", width: 100, height: 100 },
  { src: "/img/2.jpg", width: 100, height: 100 },
  { src: "/img/1.jpg", width: 100, height: 100 },
];

const secondRowPhotos = [
  { src: "/img/1.jpg" },
  { src: "/img/2.jpg" },
  { src: "/img/3.jpg" },
  { src: "/img/4.jpg" },
  { src: "/img/5.jpg" },
  { src: "/img/5.jpg" },
  { src: "/img/4.jpg" },
  { src: "/img/3.jpg" },
  { src: "/img/2.jpg" },
  { src: "/img/1.jpg" },
];

function App() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="App">
      <div style={{ background: "#FCD8D4", height: "100vh", backgroundImage: `url(/img/main.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'auto' }}>
        <div style={{ margin: "2vh", height: "96vh", border: "1px solid white" }}>
          <h1 style={{ fontFamily: 'Noto Serif KR', color: "white", margin: '0px' }}>
            <br />
            안녕하세요.<br />
            저희가 결혼합니다.
          </h1>
          <p style={{ fontFamily: 'Noto Serif KR', color: "white" }}>
            2023년 10월 15일 일요일 12시
          </p>
          <p style={{ fontFamily: 'Noto Serif KR', color: "white" }}>
            서울특별시 용산구 소월로 302 앨리스몽드
          </p>
        </div>
      </div>

      <div style={{ width: '92vw', marginLeft: '4vw', marginRight: '4vw',  marginTop: '2vh', marginBottom: '5vh', fontFamily: 'Noto Serif KR', height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'auto'}}>
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

      <div style={{ height: '70vh', widhth: '80vw', fontFamily: 'Noto Serif KR', margin: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'auto' }}>
        <div>
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>홍석길 심미경</span><span>의 장남</span>
          <br />
        </div>
        <p style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '25px' }}>홍경환</p>
        <div><span style={{ fontWeight: 'bold', fontSize: '20px' }}>이종호 엄은희</span><span>의 장녀</span></div>
        <p style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '25px' }}>이현경</p>
        <br />
        <span>2023년 10월 15일 일요일 오후 12시</span>
        <br />
        <span>서울특별시 용산구 소월로 302</span>
        <br />
        <span style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '20px' }}>앨리스몽드</span>
        <span style={{ fontFamily: 'Noto Serif KR' }}>02-511-2266</span>
        <br />
      </div>

      <p style={{ fontFamily: 'Nanum Pen Script', fontWeight: '900', fontSize: '25px' }}> <PhotoAlbumOutlinedIcon/> Photo Gallery</p>
      <PhotoAlbum
        layout="rows"
        photos={firstRowPhotos}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={secondRowPhotos}
        open={index >= 0}
        close={() => setIndex(-1)}
        imagefit="cover"
      />
      <p style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '25px' }}>
        <div style={{color: 'pink'}}><MapIcon fontSize='medium'/> 오시는 길 </div>
      </p>

      <p style={{ fontFamily: 'Noto Serif KR', fontSize: '20px' }}>
        서울 특별시 용산구 소월로 302
        <br />앨리스몽드
      </p>

      <Location/>
      <div style={{ marginTop: '5vh', marginBottom: '5vh', marginLeft: '20vw', marginRight: '20vw', width: '60vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <a className="icon-button" href="http://kko.to/OL05Vr4gN8">
          <img src='/img/kakaomap_icon.png' width="40px" height="40px" alt="kakaomap" sytle={{ }}/>
        </a>
        <a className="icon-button" href="https://goo.gl/maps/dBbo1yXj3J3iNVzJA">
          <img src='/img/navermap_icon.png' width="40px" height="40px" alt="googlemap" />
        </a>
        <a className="icon-button" href="https://naver.me/F5CEVMfa">
          <img src='/img/Google_Maps_icon_(2015-2020).png' width="40px" height="40px" alt="navermap" />
        </a>

      </div>
      <div>
        <div>
          <p style={{ fontFamily: 'Noto Serif KR'}}><span style={{fontFamily: 'Nanum Pen Script', fontSize: '30px', fontWeight: '800'}}>신랑 </span>에게 연락하기</p>
          <a href="tel:778-878-7206">
            <CallOutlinedIcon fontSize="large" className='icons'/>
          </a>
          <a href="sms:778-878-7206">
            <TextsmsOutlinedIcon fontSize="large" className='icons'/>
          </a>
        </div>
        <div>
          <p style={{ fontFamily: 'Noto Serif KR'}}><span style={{fontFamily: 'Nanum Pen Script', fontSize: '30px', fontWeight: '800'}}>신부 </span>에게 연락하기</p>
          <a href="tel:778-878-7206">
            <CallOutlinedIcon fontSize="large" className='icons'/>
          </a>
          <a href="sms:778-878-7206">
            <TextsmsOutlinedIcon fontSize="large" className='icons'/>
          </a>
        </div>
      </div>

      <div>
        <p style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '25px' }}>마음 전하실 곳</p>
      </div>

      <div style={{ fontFamily: 'Noto Serif KR', fontSize: '15px' }}>
        <p>
          <span>신랑 </span> <span style={{ fontSize: '25px', fontWeight: '700' }}> 홍경환 </span>
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="https://qr.kakaopay.com/Ej7vEx8PX">
            <img src='/img/payment_icon_yellow_medium.png' alt="kakaopay" width="60px" height="25px" />
          </a>
        </div>
        <p>
          <span>신부 </span> <span style={{ fontSize: '25px', fontWeight: '700' }}> 이현경 </span>
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>

          <a href="https://qr.kakaopay.com/Ej8ZN4qpM">
            <img src='/img/payment_icon_yellow_medium.png' alt="kakaopay" width="60px" height="25px" />
          </a>
        </div>
      </div>

      <div>
        <p style={{ fontFamily: 'Noto Serif KR',  fontWeight: '900', fontSize: '25px' }}>공유하기</p>
      </div>
      <div>
        <button> KakaoTalk </button>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'auto', background: 'black', color: 'white', fontSize: '15px', height: '5vh'}}>Made by @GyoungHwan Hong</div>
    </div>
  );
}

export default App;
