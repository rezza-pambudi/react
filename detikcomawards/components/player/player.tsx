import React from 'react'
import "./player.css";

export default function Player() {
  return (
    <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/CfJd5InuSOg"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
  )
}
