import './App.css';
import React from 'react';
import Location from './location';
import GuestBook from './GuestBook';
import PhotoAlbum from "react-photo-album"
import Lightbox from "yet-another-react-lightbox";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Snowfall from 'react-snowfall'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faTrainSubway, faCar, faMap, faHeart, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'


import "yet-another-react-lightbox/styles.css";

const busIcon = <FontAwesomeIcon icon={faBus} bounce style={{ color: "#d5bdaf", }} />
const subwayIcon = <FontAwesomeIcon icon={faTrainSubway} bounce style={{ color: "#d5bdaf", }} />
const carIcon = <FontAwesomeIcon icon={faCar} bounce style={{ color: "#d5bdaf", }} />
const mapIcon = <FontAwesomeIcon icon={faMap} bounce style={{ color: "#d5bdaf", }} />
const heartIcon = <FontAwesomeIcon icon={faHeart} bounce style={{ color: "#d5bdaf", }} />
const photoIcon = <FontAwesomeIcon icon={faPhotoFilm} bounce style={{ color: "#d5bdaf", }} />
// const clipIcon = <FontAwesomeIcon icon={faClipboard} style={{ color: "#d5bdaf", size: "xl" }} />


const firstRowPhotos = [
  { src: "/img/100x100/k1.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k2.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k3.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k4.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k5.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k6.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k7.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k8.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k9.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k10.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k11.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k12.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k13.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k14.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k15.jpg", width: 100, height: 100 },
  { src: "/img/100x100/k16.jpg", width: 100, height: 100 },
];

const secondRowPhotos = [
  { src: "/img/k1.jpg" },
  { src: "/img/k2.jpg" },
  { src: "/img/k3.jpg" },
  { src: "/img/k4.jpg" },
  { src: "/img/k5.jpg" },
  { src: "/img/k6.jpg" },
  { src: "/img/k7.jpg" },
  { src: "/img/k8.jpg" },
  { src: "/img/k9.jpg" },
  { src: "/img/k10.jpg" },
  { src: "/img/k11.jpg" },
  { src: "/img/k12.jpg" },
  { src: "/img/k13.jpg" },
  { src: "/img/k14.jpg" },
  { src: "/img/k15.jpg" },
  { src: "/img/k16.jpg" },
];

const leaf = document.createElement('img')
leaf.src = '/img/leaf.png'
const flower = document.createElement('img')
flower.src = '/img/flower.png'
const whiteHeart = document.createElement('img')
whiteHeart.src = '/img/white_heart.png'
const flowerPink = document.createElement('img')
flowerPink.src = '/img/flowerPink.png'

const fallingImages = [leaf, flower, whiteHeart, flowerPink]

// const handleCopyClipBoard = async (text) => {
//   try {
//     await navigator.clipboard.writeText(text);
//     alert("클립보드에 링크가 복사되었어요.");
//   } catch (err) {
//     console.log(err);
//   }
// };


function App() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="App">
      <div style={{ background: "#FCD8D4", height: "100vh", backgroundImage: `url(/img/main.jpg)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "cover", display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'auto' }}>
        <Snowfall
          images={fallingImages}
          snowflakeCount={200}
        />
        <div style={{ margin: "2%", height: "96vh", border: "1px solid white", display: 'block', position: 'relative'}}>
          <div className="main-text" style={{  padding: '15px', width: '92%', position: 'absolute', bottom: '0px' }}>
            <h1 style={{ fontFamily: 'Noto Serif KR', color: "white", margin: '0px' }}>
              홍경환, 이현경<br />
              저희가 <span style={{ fontFamily: 'Noto Serif KR', color: "pink", fontWeight: "900" }}>결혼</span>합니다.
            </h1>
            <p style={{ fontFamily: 'Noto Serif KR', fontWeight: 'bold', color: "white" }}>
              2023년 10월 15일 일요일 12시
            </p>
            <p style={{ fontFamily: 'Noto Serif KR', color: "white" }}>
              서울특별시 용산구 소월로 302
              <span style={{ fontFamily: 'Noto Serif KR', color: "white", fontWeight: 'bold' }}> 앨리스몽드 </span>
            </p>
          </div>
        </div>
      </div>

      <div style={{ width: '92vw', marginLeft: '4vw', marginRight: '4vw', marginTop: '2vh', marginBottom: '2vh', fontFamily: 'Noto Serif KR', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'auto' }}>
        "<br />
        잘 지내시죠...?
        <br />
        <br />
        캐나다에 온 이후로
        <br />
        좋은 소식만 전하려고 보니
        <br />
        연락을 자주 못 했습니다.
        <br />
        <br />
        드디어,
        <br />
        좋은 소식이 하나 있습니다.<br />
        <br />
        저희 결혼합니다!<br />
        <br />
        귀한 시간 내셔서,
        <br />
        따뜻한 마음으로 축하해 주시면 감사하겠습니다.<br />
        "<br />
      </div>

      <div style={{ background: "#f5ebe0", height: '70vh', widhth: '80vw', fontFamily: 'Noto Serif KR', margin: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'auto' }}>
        <div>
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}><span style={{ color: 'gray' }}>故</span>홍석길 심미경</span><span>의 장남</span>
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
        <br />
        <a href="tel:02-511-2266">
          <CallOutlinedIcon fontSize="large" className='icons' />
        </a>
      </div>

      <p style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '25px' }}> {photoIcon}  저희의 추억</p>
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
      <div style={{ background: "#f5ebe0", paddingTop: '10px', paddingBottom: '10px' }}>
        <p style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '25px' }}>
          <div> {mapIcon} 오시는 길 </div>
        </p>

        <p style={{ fontFamily: 'Noto Serif KR', fontSize: '20px' }}>
          서울 특별시 용산구 소월로 302
          <br />앨리스몽드
        </p>

        <Location />
        <div style={{ marginTop: '5vh', marginBottom: '5vh', marginLeft: '20vw', marginRight: '20vw', width: '60vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <a className="icon-button" href="http://kko.to/OL05Vr4gN8">
            <img src='/img/kakaomap_icon.png' width="40px" height="40px" alt="kakaomap" />
          </a>
          <a className="icon-button" href="https://goo.gl/maps/dBbo1yXj3J3iNVzJA">
            <img src='/img/navermap_icon.png' width="40px" height="40px" alt="googlemap" />
          </a>
          <a className="icon-button" href="https://naver.me/F5CEVMfa">
            <img src='/img/Google_Maps_icon_(2015-2020).png' width="40px" height="40px" alt="navermap" />
          </a>
        </div>
      </div>

      <div style={{ padding: '0 0 10px 0' }}>
        <div> <p className='guides' style={{ fontWeight: 'bold', fontSize: '24px' }}>{subwayIcon}  지하철 </p>
          <p className='guides' style={{ fontWeight: 'bold', fontSize: '20px' }}>6호선 이태원역 3번 출구</p>
          <p>[이태원119안전센터]</p>
          405 버스 승차 - 하얏트호텔 하차 - 도보 1분
          <p className='guides' style={{ fontWeight: 'bold', fontSize: '20px' }}>6호선 녹사평역 4번 출구</p>
          <p>[용사평역,용산구청]</p>
          용산03버스 승차 - 필리핀대사관 하차 - 도보 4분
        </div>
        <div> <p className='guides' style={{ fontWeight: 'bold', fontSize: '24px' }}>{busIcon}  버스</p>
          <p className='guides' style={{ fontWeight: 'bold', fontSize: '20px' }}>하얏트호텔 정류장 하차</p>
          <p>
            간선버스 402, 405 - 도보 1분
          </p>
          <p className='guides' style={{ fontWeight: 'bold', fontSize: '20px' }}>남산체육관 정류장 하차</p>
          <p>
            간선버스 402, 405 - 도보 3분
          </p>
          <p className='guides' style={{ fontWeight: 'bold', fontSize: '20px' }}>필리핀 대사관 정류장 하차</p>
          <p>
            마을버스 용산03 - 도보 4분
          </p>
        </div>

        <div style={{ margin: '0 0 10px 0' }}>
          <p className='guides' style={{ fontWeight: 'bold', fontSize: '24px' }}>{carIcon}  자가용</p>
          <p className='guides' style={{ fontWeight: 'bold', fontSize: '20px' }}>한남대교 방면에서 오는 길</p>
          남산 방향 - 하얏트호텔 사거리 - 남산식물원 방향
          <br />
          <p className='guides' style={{ fontWeight: 'bold', fontSize: '20px' }}>반포대교 방면에서 오는 길</p>
          녹사평역 - 경리단길 - 하얏트호텔 사거리 좌회전
          <br />
          <p className='guides' style={{ fontWeight: 'bold', fontSize: '20px' }}>서울역 방면에서 오는 길</p>
          밀레니엄 힐튼호텔 - 남산식물원 방향
        </div>
      </div>
      <div style={{ background: "#f5ebe0", padding: '10px 10px 10px 10px' }}>
        <div>
          <p style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '25px' }}> {heartIcon}<span>  </span>마음 전하실 곳<span>  </span>{heartIcon}</p>
        </div>

        <div>
          <p style={{ fontFamily: 'Noto Serif KR' }}><span style={{ fontFamily: 'Nanum Pen Script', fontSize: '30px', fontWeight: '800' }}>신랑 </span>에게 연락하기</p>
          <a href="tel:010-4644-9776">
            <CallOutlinedIcon fontSize="large" className='icons' />
          </a>
          <a href="sms:010-4644-9776">
            <TextsmsOutlinedIcon fontSize="large" className='icons' />
          </a>
          <a href="http://qr.kakao.com/talk/ESL_Rgzt0RpFpJA5VPxTJJ1LTVs-">
            <img style={{ marginLeft: "24px", }} src='/img/kakaotalk.png' alt="kakaoTalk" width="35px" height="35px" />
          </a>
        </div>
        <div>
          <p style={{ fontFamily: 'Noto Serif KR' }}><span style={{ fontFamily: 'Nanum Pen Script', fontSize: '30px', fontWeight: '800' }}>신부 </span>에게 연락하기</p>
          <a href="tel:010-5218-1633">
            <CallOutlinedIcon fontSize="large" className='icons' />
          </a>
          <a href="sms:010-5218-1633">
            <TextsmsOutlinedIcon fontSize="large" className='icons' />
          </a>
          <a href="http://qr.kakao.com/talk/vOUGkXsyKUFMvd0JdQqHDpZZArM-">
            <img style={{ marginLeft: "24px", }} src='/img/kakaotalk.png' alt="kakaoTalk" width="35px" height="35px" />
          </a>
        </div>

        <div style={{ fontFamily: 'Noto Serif KR', fontSize: '15px' }}>
          <p>
            <span>신랑 </span> <span style={{ fontSize: '25px', fontWeight: '700' }}> 홍경환 </span>
          </p>
          <p>E-transfer: hongkh5218@gmail.com</p>
          <p>기업은행 01046449776 </p>
          <p>예금주 : 홍경환</p>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize:"16px"}}>카카오페이</p>
            <a href="https://qr.kakaopay.com/Ej7vEx8PX">
              <img src='/img/payment_icon_yellow_medium.png' alt="kakaopay" width="60px" height="25px" />
            </a>
          </div>
          <p>
            <span>신부 </span> <span style={{ fontSize: '25px', fontWeight: '700' }}> 이현경 </span>
          </p>
          <p>E-transfer: lovely2hk@gmail.com</p>
          <p>국민은행 343602-04-182362 </p>
          <p>예금주 : 이현경</p>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize:"16px"}}>카카오페이</p>
            <a href="https://qr.kakaopay.com/281006011000048056615442">
              <img src='/img/payment_icon_yellow_medium.png' alt="kakaopay" width="60px" height="25px" />
            </a>
          </div>
        </div>

        <div>  </div>

        {/* <div style={{ margin: '10px 0 10px 0' }}>
          <p style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '25px', margin: '5px' }}>주소 복사하기</p>
          <br />
          <span style={{ fontSize: '36px', margin: '0 0 0 0' }} onClick={() => handleCopyClipBoard(`https://ephemeral-meringue-250833.netlify.app/`)}>{clipIcon}</span>
        </div> */}

        <GuestBook />

      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 'auto', background: 'black', color: 'white', fontSize: '15px', height: '5vh' }}>Made by @GyoungHwan Hong</div>
    </div>
  );
}

export default App;
