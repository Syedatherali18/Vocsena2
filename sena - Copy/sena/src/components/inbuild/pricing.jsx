import React, { useEffect, useRef } from 'react';
import './style.css';
import Header from '../Header';
import Contact from './Contact';
import Calendar from "./Calender";
const Pricing = () => {
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)

  useEffect(() => {
    initializeWebRTC();
  }, []);

  const initializeWebRTC = async () => {
    const configuration = {
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    };
    const peerConnection = new RTCPeerConnection(configuration);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = stream;
      stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
    } catch (error) {
      console.error('Error accessing local media:', error);
    }

    peerConnection.ontrack = (event) => {
      const remoteStream = event.streams[0];
      remoteVideoRef.current.srcObject = remoteStream;
    };
  };

  return (
    <div>
      <Header />
      <section id="vertical-animation-container-pricing">
        <h2 id="sentence-pricing">
          The most competitive pricing in the town, setting a standard that no one else can match
        </h2>
      </section>
<Calendar/>
      <div className="app-container">
        <h2>Add the calender like calendy!</h2>
        <button className="mode-switch">
          {}
        </button>
        <div className="left-side">
          {}
        </div>
        <div className="app-main">
          <div className="video-call-wrapper">
            <video ref={localVideoRef} autoPlay playsInline />
            <video ref={remoteVideoRef} autoPlay playsInline />
          </div>
          <div className="video-call-actions">
            {}
          </div>
        </div>
        <div className="right-side">
          <button className="btn-close-right">
            {}
          </button>
          <div className="chat-container">
            <div className="chat-header">
              <button className="chat-header-button">
                Live Chat
              </button>
            </div>
            <div className="chat-area">
              {}
            </div>
            <div className="chat-typing-area-wrapper">
              <div className="chat-typing-area">
                <input type="text" placeholder="Type your message..." className="chat-input" />
                <button className="send-button">
                  {}
                </button>
              </div>
            </div>
          </div>
          <div className="participants">
            {}
          </div>
        </div>
        <button className="expand-btn">
          {}
        </button>
      </div>

      <Contact />
    </div>
  );
};

export default Pricing;
