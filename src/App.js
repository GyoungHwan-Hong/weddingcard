import "./App.css";
import React from "react";
import Location from "./location";
import GuestBook from "./GuestBook";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Snowfall from "react-snowfall";
import { useTranslation } from "react-i18next";
import i18next from "./lang/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faTrainSubway,
  faCar,
  faMap,
  faHeart,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";

import "yet-another-react-lightbox/styles.css";

const busIcon = (
  <FontAwesomeIcon icon={faBus} bounce style={{ color: "#d5bdaf" }} />
);
const subwayIcon = (
  <FontAwesomeIcon icon={faTrainSubway} bounce style={{ color: "#d5bdaf" }} />
);
const carIcon = (
  <FontAwesomeIcon icon={faCar} bounce style={{ color: "#d5bdaf" }} />
);
const mapIcon = (
  <FontAwesomeIcon icon={faMap} bounce style={{ color: "#d5bdaf" }} />
);
const heartIcon = (
  <FontAwesomeIcon icon={faHeart} bounce style={{ color: "#d5bdaf" }} />
);
const photoIcon = (
  <FontAwesomeIcon icon={faPhotoFilm} bounce style={{ color: "#d5bdaf" }} />
);
// const clipIcon = <FontAwesomeIcon icon={faClipboard} style={{ color: "#d5bdaf", size: "xl" }} />

const firstRowPhotos = [
  { src: "/img/100x100/001.jpg", width: 100, height: 100 },
  { src: "/img/100x100/002.jpg", width: 100, height: 100 },
  { src: "/img/100x100/003.jpg", width: 100, height: 100 },
  { src: "/img/100x100/004.jpg", width: 100, height: 100 },
  { src: "/img/100x100/005.jpg", width: 100, height: 100 },
  { src: "/img/100x100/006.jpg", width: 100, height: 100 },
  { src: "/img/100x100/007.jpg", width: 100, height: 100 },
  { src: "/img/100x100/008.jpg", width: 100, height: 100 },
  { src: "/img/100x100/009.jpg", width: 100, height: 100 },
  { src: "/img/100x100/010.jpg", width: 100, height: 100 },
  { src: "/img/100x100/011.jpg", width: 100, height: 100 },
  { src: "/img/100x100/012.jpg", width: 100, height: 100 },
  { src: "/img/100x100/013.jpg", width: 100, height: 100 },
  { src: "/img/100x100/014.jpg", width: 100, height: 100 },
  { src: "/img/100x100/015.jpg", width: 100, height: 100 },
  { src: "/img/100x100/016.jpg", width: 100, height: 100 },
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
  { src: "/img/001.jpeg" },
  { src: "/img/002.jpeg" },
  { src: "/img/003.jpeg" },
  { src: "/img/004.jpeg" },
  { src: "/img/005.jpeg" },
  { src: "/img/006.jpeg" },
  { src: "/img/007.jpeg" },
  { src: "/img/008.jpeg" },
  { src: "/img/009.jpeg" },
  { src: "/img/010.jpeg" },
  { src: "/img/011.jpeg" },
  { src: "/img/012.jpeg" },
  { src: "/img/013.jpeg" },
  { src: "/img/014.jpeg" },
  { src: "/img/015.jpeg" },
  { src: "/img/016.jpeg" },
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

const leaf = document.createElement("img");
leaf.src = "/img/leaf.png";
const flower = document.createElement("img");
flower.src = "/img/flower.png";
const whiteHeart = document.createElement("img");
whiteHeart.src = "/img/white_heart.png";
const flowerPink = document.createElement("img");
flowerPink.src = "/img/flowerPink.png";

const fallingImages = [leaf, flower, whiteHeart, flowerPink];

// const handleCopyClipBoard = async (text) => {
//   try {
//     await navigator.clipboard.writeText(text);
//     alert("클립보드에 링크가 복사되었어요.");
//   } catch (err) {
//     console.log(err);
//   }
// };

function App() {
  const { t } = useTranslation();

  const clickHandler = (lang) => {
    i18next.changeLanguage(lang);
  };

  const [index, setIndex] = React.useState(-1);

  return (
    <div className="App">
      <div
        style={{
          background: "#FCD8D4",
          height: "100vh",
          backgroundImage: `url(/img/main.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "auto",
        }}
      >
        <Snowfall images={fallingImages} snowflakeCount={200} />
        <div
          style={{
            margin: "2%",
            height: "96vh",
            border: "1px solid white",
            display: "block",
            position: "relative",
          }}
        >
          <div>
            <button onClick={() => clickHandler("ko")}>KO</button>
            <button onClick={() => clickHandler("en")}>EN</button>
          </div>
          <div
            className="main-text"
            style={{
              padding: "15px",
              width: "92%",
              position: "absolute",
              bottom: "0px",
            }}
          >
            <h1
              style={{
                fontFamily: "Noto Serif KR",
                color: "white",
                margin: "0px",
              }}
            >
              {t("i1")}
              <br />
              {t("i2")}{" "}
              <span
                style={{
                  fontFamily: "Noto Serif KR",
                  color: "pink",
                  fontWeight: "900",
                }}
              >
                {t("i3")}
              </span>
              {t("i4")}
            </h1>
            <p
              style={{
                fontFamily: "Noto Serif KR",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {t("date")}
            </p>
            <p style={{ fontFamily: "Noto Serif KR", color: "white" }}>
              {t("address")}
              <span
                style={{
                  fontFamily: "Noto Serif KR",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {" "}
                {t("venue")}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "92vw",
          marginLeft: "4vw",
          marginRight: "4vw",
          marginTop: "2vh",
          marginBottom: "2vh",
          fontFamily: "Noto Serif KR",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "auto",
        }}
      >
        "<br />
        {t("message1")}
        <br />
        <br />
        {t("message2")}
        <br />
        {t("message3")}
        <br />
        {t("message4")}
        <br />
        <br />
        {t("message5")}
        <br />
        {t("message6")}
        <br />
        <br />
        {t("message7")}
        <br />
        <br />
        {t("message8")}
        <br />
        {t("message9")}
        <br />
        "<br />
      </div>

      <div
        style={{
          background: "#f5ebe0",
          height: "70vh",
          widhth: "80vw",
          fontFamily: "Noto Serif KR",
          margin: "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "auto",
        }}
      >
        <div>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            <span style={{ color: "gray" }}>{t("manParent1")}</span>
            {t("manParent2")}
          </span>
          <span>{t("manIntro")}</span>
          <br />
        </div>
        <p
          style={{
            fontFamily: "Noto Serif KR",
            fontWeight: "900",
            fontSize: "25px",
          }}
        >
          {t("manName")}
        </p>
        <div>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            {t("womanParent2")}
          </span>
          <span>{t("womanIntro")}</span>
        </div>
        <p
          style={{
            fontFamily: "Noto Serif KR",
            fontWeight: "900",
            fontSize: "25px",
          }}
        >
          {t("womanName")}
        </p>
        <br />
        <span>{t("date")}</span>
        <br />
        <span>{t("address")}</span>
        <br />
        <span
          style={{
            fontFamily: "Noto Serif KR",
            fontWeight: "900",
            fontSize: "20px",
          }}
        >
          {t("venue")}
        </span>
        <br />
        <a href="tel:02-511-2266">
          <CallOutlinedIcon fontSize="large" className="icons" />
        </a>
      </div>

      <p
        style={{
          fontFamily: "Noto Serif KR",
          fontWeight: "900",
          fontSize: "25px",
        }}
      >
        {" "}
        {photoIcon} {t("photoAlbum")}
      </p>
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
      <div
        style={{
          background: "#f5ebe0",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <p
          style={{
            fontFamily: "Noto Serif KR",
            fontWeight: "900",
            fontSize: "25px",
          }}
        >
          <div>
            {" "}
            {mapIcon} {t("map")}{" "}
          </div>
        </p>

        <p style={{ fontFamily: "Noto Serif KR", fontSize: "20px" }}>
          {t("address")}
          <br />
          {t("venue")}
        </p>

        <Location />
        <div
          style={{
            marginTop: "5vh",
            marginBottom: "5vh",
            marginLeft: "20vw",
            marginRight: "20vw",
            width: "60vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <a className="icon-button" href="http://kko.to/OL05Vr4gN8">
            <img
              src="/img/kakaomap_icon.png"
              width="40px"
              height="40px"
              alt="kakaomap"
            />
          </a>
          <a
            className="icon-button"
            href="https://goo.gl/maps/dBbo1yXj3J3iNVzJA"
          >
            <img
              src="/img/navermap_icon.png"
              width="40px"
              height="40px"
              alt="googlemap"
            />
          </a>
          <a className="icon-button" href="https://naver.me/F5CEVMfa">
            <img
              src="/img/Google_Maps_icon_(2015-2020).png"
              width="40px"
              height="40px"
              alt="navermap"
            />
          </a>
        </div>
      </div>

      <div style={{ padding: "0 0 10px 0" }}>
        <div>
          {" "}
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "24px" }}
          >
            {subwayIcon} {t("metro")}{" "}
          </p>
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {t("metro1")}
          </p>
          <p>{t("metro2")}</p>
          {t("metro3")}
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {t("metro4")}
          </p>
          <p>{t("metro5")}</p>
          {t("metro6")}
        </div>
        <div>
          {" "}
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "24px" }}
          >
            {busIcon} {t("bus")}
          </p>
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {t("bus1")}
          </p>
          <p>{t("bus2")}</p>
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {t("bus3")}
          </p>
          <p>{t("bus4")}</p>
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {t("bus5")}
          </p>
          <p>{t("bus6")}</p>
        </div>

        <div style={{ margin: "0 0 10px 0" }}>
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "24px" }}
          >
            {carIcon} {t("car")}
          </p>
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {t("car1")}
          </p>
          {t("car2")}
          <br />
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {t("car3")}
          </p>
          {t("car4")}
          <br />
          <p
            className="guides"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {t("car5")}
          </p>
          {t("car6")}
        </div>
      </div>
      <div style={{ background: "#f5ebe0", padding: "10px 10px 10px 10px" }}>
        <div>
          <p
            style={{
              fontFamily: "Noto Serif KR",
              fontWeight: "900",
              fontSize: "25px",
            }}
          >
            {" "}
            {heartIcon}
            <span> </span>
            {t("heart")}
            <span> </span>
            {heartIcon}
          </p>
        </div>

        <div>
          <p style={{ fontFamily: "Noto Serif KR" }}>
            <span
              style={{
                fontFamily: "Nanum Pen Script",
                fontSize: "30px",
                fontWeight: "800",
              }}
            >
              {t("heart1")}{" "}
            </span>
            {t("heart2")}
          </p>
          <a href="tel:010-4644-9776">
            <CallOutlinedIcon fontSize="large" className="icons" />
          </a>
          <a href="sms:010-4644-9776">
            <TextsmsOutlinedIcon fontSize="large" className="icons" />
          </a>
          <a href="http://qr.kakao.com/talk/ESL_Rgzt0RpFpJA5VPxTJJ1LTVs-">
            <img
              style={{ marginLeft: "24px" }}
              src="/img/kakaotalk.png"
              alt="kakaoTalk"
              width="35px"
              height="35px"
            />
          </a>
        </div>
        <div>
          <p style={{ fontFamily: "Noto Serif KR" }}>
            <span
              style={{
                fontFamily: "Nanum Pen Script",
                fontSize: "30px",
                fontWeight: "800",
              }}
            >
              {t("heart3")}{" "}
            </span>
            {t("heart2")}
          </p>
          <a href="tel:010-5218-1633">
            <CallOutlinedIcon fontSize="large" className="icons" />
          </a>
          <a href="sms:010-5218-1633">
            <TextsmsOutlinedIcon fontSize="large" className="icons" />
          </a>
          <a href="http://qr.kakao.com/talk/vOUGkXsyKUFMvd0JdQqHDpZZArM-">
            <img
              style={{ marginLeft: "24px" }}
              src="/img/kakaotalk.png"
              alt="kakaoTalk"
              width="35px"
              height="35px"
            />
          </a>
        </div>
        <div style={{ fontFamily: "Noto Serif KR", fontSize: "15px" }}>
          <p>
            <span>{t("heart1")} </span>{" "}
            <span style={{ fontSize: "25px", fontWeight: "700" }}>
              {" "}
              {t("manName")}{" "}
            </span>
          </p>
          <p>{t("accountInfo")}</p>
          <p>{t("accountInfo1")}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "16px" }}>{t("kakaopay")}</p>
            <a href="https://qr.kakaopay.com/Ej7vEx8PX">
              <img
                src="/img/payment_icon_yellow_medium.png"
                alt="kakaopay"
                width="60px"
                height="25px"
              />
            </a>
          </div>
          <p>
            <span>{t("heart3")} </span>{" "}
            <span style={{ fontSize: "25px", fontWeight: "700" }}>
              {" "}
              {t("womanName")}{" "}
            </span>
          </p>
          <p>{t("accountInfo2")} </p>
          <p>{t("accountInfo3")}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "16px" }}>{t("kakaopay")}</p>
            <a href="https://qr.kakaopay.com/281006011000048056615442">
              <img
                src="/img/payment_icon_yellow_medium.png"
                alt="kakaopay"
                width="60px"
                height="25px"
              />
            </a>
          </div>
        </div>
        {/* <div style={{ margin: '10px 0 10px 0' }}>
          <p style={{ fontFamily: 'Noto Serif KR', fontWeight: '900', fontSize: '25px', margin: '5px' }}>주소 복사하기</p>
          <br />
          <span style={{ fontSize: '36px', margin: '0 0 0 0' }} onClick={() => handleCopyClipBoard(`https://ephemeral-meringue-250833.netlify.app/`)}>{clipIcon}</span>
        </div> */}
        <GuestBook />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "auto",
          background: "black",
          color: "white",
          fontSize: "15px",
          height: "5vh",
        }}
      >
        Made by @GyoungHwan Hong
      </div>
    </div>
  );
}

export default App;
