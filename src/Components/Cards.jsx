import React, { useState } from "react";
import bookCover1 from "../img/BookCovers/Bookcover1.jpg";
import bookCover2 from "../img/BookCovers/Bookcover2.png";
import bookCover3 from "../img/BookCovers/Bookcover3.jpg";
import bookCover4 from "../img/BookCovers/Bookcover4.jpg";
import bookCover5 from "../img/BookCovers/Bookcover5.png";
import bookCover6 from "../img/BookCovers/Bookcover6.png";
import bookCover7 from "../img/BookCovers/Bookcover7.png";
import bookCover8 from "../img/BookCovers/Bookcover8.jpg";
import bookCover9 from "../img/BookCovers/Bookcover9.png";
import bookCover10 from "../img/BookCovers/Bookcover10.png";
import bookCover11 from "../img/BookCovers/Bookcover11.png";
import bookCover12 from "../img/BookCovers/Bookcover12.png";
import bookCover13 from "../img/BookCovers/Bookcover13.png";
import bookCover14 from "../img/BookCovers/Bookcover14.jpg";

import flyer1 from "../img/Flyers/flyer1.png";
import flyer2 from "../img/Flyers/flyer2.png";
import flyer3 from "../img/Flyers/flyer3.jpg";
import flyer4 from "../img/Flyers/flyer4.png";

import ArtCover1 from "../img/CoverArtDesigns/cover1.jpg";
import ArtCover2 from "../img/CoverArtDesigns/cover2.jpg";
import ArtCover3 from "../img/CoverArtDesigns/cover3.jpg";

import infoGraphic2 from "../img/Infographics/Infographic2.png";
import infoGraphic3 from "../img/Infographics/Infographic3.png";
import infoGraphic4 from "../img/Infographics/Infographic4.png";
import infoGraphic5 from "../img/Infographics/Infographic5.png";
import infoGraphic6 from "../img/Infographics/Infographic6.png";
import infoGraphic7 from "../img/Infographics/Infographic7.png";
import infoGraphic8 from "../img/Infographics/Infographic8.png";
import infoGraphic9 from "../img/Infographics/Infographic9.png";
import infoGraphic10 from "../img/Infographics/Infographic10.png";
import infoGraphic11 from "../img/Infographics/Infographic11.png";
import infoGraphic12 from "../img/Infographics/Infographic12.png";

import banner1 from "../img/Banners/Banner1.png";
import banner2 from "../img/Banners/Banner2.png";
import banner3 from "../img/Banners/Banner3.png";

import logo1 from "../img/Logodesigns/logo1.png";
import logo2 from "../img/Logodesigns/logo2.png";
import logo3 from "../img/Logodesigns/logo3.png";

import movie1 from "../img/Movieposter/Movie1.jpg";
import movie2 from "../img/Movieposter/Movie2.jpg";
import movie3 from "../img/Movieposter/Movie3.jpg";
 import movie6 from "../img/Movieposter/Movie6.jpg";
import movie7 from "../img/Movieposter/Movie7.jpg";
import movie8 from "../img/Movieposter/Movie8.jpg";
import movie9 from "../img/Movieposter/Movie9.jpg";
import movie10 from "../img/Movieposter/Movie10.jpg";
import movie11 from "../img/Movieposter/Movie11.jpg";
import movie12 from "../img/Movieposter/Movie12.jpg";

import poster1 from "../img/Posters/poster1.jpg";
import poster2 from "../img/Posters/poster2.jpg";
import poster3 from "../img/Posters/poster3.jpg";
import poster4 from "../img/Posters/poster4.jpg";
 import poster6 from "../img/Posters/poster6.jpg";
 import poster8 from "../img/Posters/poster8.jpg";
import poster9 from "../img/Posters/poster9.png";

import { FaBars, FaXmark } from "react-icons/fa6";

const Modal = ({ image, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img src={image} alt="Full Size" />
    </div>
  </div>
);

const Card = () => {
  const [selectedOption, setSelectedOption] = useState("bookCover");
  const [modalImage, setModalImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCardClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handelHamClick = () => {
    setOpen(!open);
  };

  return (
    <div className="workSec mb-[2rem]" id="projects">
      <div className="workBox flex justify-center">
        <div className="workOption bg-[#fbc216] mb-[4rem] p-[8px] rounded-[15px] w-[960px]">
          <ul className="flex items-center justify-around text-[1.1rem] font-semibold text-[#37122e]">
            <li
              onClick={() => handleOptionClick("bookCover")}
              className={
                selectedOption === "bookCover" ? "selected" : "notSelected"
              }
            >
              Book Covers
            </li>
            <li
              onClick={() => handleOptionClick("infoGraphic")}
              className={
                selectedOption === "infoGraphic" ? "selected" : "notSelected"
              }
            >
              Info Graphics
            </li>
            <li
              onClick={() => handleOptionClick("flyer")}
              className={
                selectedOption === "flyer" ? "selected" : "notSelected"
              }
            >
              Flyers
            </li>
            <li
              onClick={() => handleOptionClick("artCover")}
              className={
                selectedOption === "artCover" ? "selected" : "notSelected"
              }
            >
              Art Covers
            </li>

            <li
              onClick={() => handleOptionClick("banner")}
              className={
                selectedOption === "banner" ? "selected" : "notSelected"
              }
            >
              Banners
            </li>

            <li
              onClick={() => handleOptionClick("logo")}
              className={selectedOption === "logo" ? "selected" : "notSelected"}
            >
              Logos
            </li>

            <li
              onClick={() => handleOptionClick("movie")}
              className={
                selectedOption === "movie" ? "selected" : "notSelected"
              }
            >
              Movie Posters
            </li>

            <li
              onClick={() => handleOptionClick("poster")}
              className={
                selectedOption === "poster" ? "selected" : "notSelected"
              }
            >
              Posters
            </li>
          </ul>
        </div>
      </div>
      <div className="res-list">
        <div className="hamDiv">
          <div className="ham" onClick={handelHamClick}>
            {open ? <FaXmark /> : <FaBars />}
          </div>

          {open && (
            <div className="workOption mb-[4rem] p-[8px] rounded-[15px] w-[960px]">
              <ul className="flex flex-col items-center justify-around text-[1.1rem] font-semibold text-[#37122e]">
                <li
                  onClick={() => handleOptionClick("bookCover")}
                  className={
                    selectedOption === "bookCover"
                      ? "selectedRes"
                      : "resList-li"
                  }
                >
                  Book Covers
                </li>
                <li
                  onClick={() => handleOptionClick("infoGraphic")}
                  className={
                    selectedOption === "infoGraphic"
                      ? "selectedRes"
                      : "resList-li"
                  }
                >
                  Info Graphics
                </li>
                <li
                  onClick={() => handleOptionClick("flyer")}
                  className={
                    selectedOption === "flyer" ? "selectedRes" : "resList-li"
                  }
                >
                  Flyers
                </li>
                <li
                  onClick={() => handleOptionClick("artCover")}
                  className={
                    selectedOption === "artCover" ? "selectedRes" : "resList-li"
                  }
                >
                  Art Covers
                </li>

                <li
                  onClick={() => handleOptionClick("banner")}
                  className={
                    selectedOption === "banner" ? "selectedRes" : "resList-li"
                  }
                >
                  Banners
                </li>

                <li
                  onClick={() => handleOptionClick("logo")}
                  className={
                    selectedOption === "logo" ? "selectedRes" : "resList-li"
                  }
                >
                  Logos
                </li>

                <li
                  onClick={() => handleOptionClick("movie")}
                  className={
                    selectedOption === "movie" ? "selectedRes" : "resList-li"
                  }
                >
                  Movie Posters
                </li>

                <li
                  onClick={() => handleOptionClick("poster")}
                  className={
                    selectedOption === "poster" ? "selectedRes" : "resList-li"
                  }
                >
                  Posters
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="cards">
        {selectedOption === "bookCover" && (
          <div className="bookCov" id="bookCover">
            {[
              bookCover1,
              bookCover2,
              bookCover3,
              bookCover4,
              bookCover5,
              bookCover6,
              bookCover7,
              bookCover8,
              bookCover9,
              bookCover10,
              bookCover11,
              bookCover12,
              bookCover13,
              bookCover14,
            ].map((cover, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(cover)}
              >
                <div className="cardImg">
                  <img src={cover} alt={`Book Cover ${index + 1}`} />
                </div>
                <div className="cardCover">
                  <p>This is a Book Cover</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* --------------------------------- */}
        {selectedOption === "flyer" && (
          <div className="flyers" id="flyer">
            {[flyer1, flyer2, flyer3, flyer4].map((flyer, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(flyer)}
              >
                <div className="cardImg">
                  <img src={flyer} alt={`Flyer ${index + 1}`} />
                </div>
                <div className="cardCover">
                  <p>This is a Flyer</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* --------------------------------- */}
        {selectedOption === "artCover" && (
          <div className="artCover" id="artCover">
            {[ArtCover1, ArtCover2, ArtCover3].map((artCover, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(artCover)}
              >
                <div className="cardImg">
                  <img src={artCover} alt={`Art Cover ${index + 1}`} />
                </div>
                <div className="cardCover">
                  <p>This is a Art Cover</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* --------------------------------- */}
        {selectedOption === "infoGraphic" && (
          <div className="inforGraphics" id="infoGraphic">
            {[
              infoGraphic2,
              infoGraphic3,
              infoGraphic4,
              infoGraphic5,
              infoGraphic6,
              infoGraphic7,
              infoGraphic8,
              infoGraphic9,
              infoGraphic10,
              infoGraphic11,
              infoGraphic12,
            ].map((infoGrahphic, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(infoGrahphic)}
              >
                <div className="cardImg">
                  <img src={infoGrahphic} alt={`Info Graphic ${index + 1}`} />
                </div>
                <div className="cardCover">
                  <p>This is a Info Graphic</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* --------------------------------- */}
        {selectedOption === "banner" && (
          <div className="banners" id="banner">
            {[banner1, banner2, banner3].map((banner, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(banner)}
              >
                <div className="cardImg">
                  <img src={banner} alt={`Banner ${index + 1}`} />
                </div>
                <div className="cardCover">
                  <p>This is a Banner</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* --------------------------------- */}
        {selectedOption === "logo" && (
          <div className="logos" id="logo">
            {[logo1, logo2, logo3].map((logo, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(logo)}
              >
                <div className="cardImg">
                  <img src={logo} alt={`Logo ${index + 1}`} />
                </div>
                <div className="cardCover">
                  <p>This is a Logo</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --------------------------------- */}
        {selectedOption === "movie" && (
          <div className="movies" id="movie">
            {[
              movie1,
              movie2,
              movie3,
              movie6,
              movie7,
              movie8,
              movie9,
              movie10,
              movie11,
              movie12,
            ].map((movie, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(movie)}
              >
                <div className="cardImg">
                  <img src={movie} alt={`Movie Poster ${index + 1}`} />
                </div>
                <div className="cardCover">
                  <p>This is a Movie Poster</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --------------------------------- */}
        {selectedOption === "poster" && (
          <div className="posters" id="poster">
            {[
              poster1,
              poster2,
              poster3,
              poster4,
              poster6,
              poster8,
              poster9,
            ].map((poster, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(poster)}
              >
                <div className="cardImg">
                  <img src={poster} alt={`Poster ${index + 1}`} />
                </div>
                <div className="cardCover">
                  <p>This is a Poster</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default Card;
