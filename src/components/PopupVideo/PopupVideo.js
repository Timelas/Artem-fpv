import React from "react";
import "./PopupVideo.css";

function PopupVideo(props) {
  const {isOpen, onCloseVideo, card} = props;

  return (
    <section className={`popup-video popup-video_${isOpen && 'open'}`} onClick={e => (e.currentTarget === e.target) && onCloseVideo()}>
      <button className={`popup-video__close`} onClick={onCloseVideo}></button>
      <iframe id="ytplayer" type="text/html"
      src={card.src} title={card.title}
      frameBorder="0" allowFullScreen className="video-one"></iframe>
    </section>
  );
}

export default PopupVideo;