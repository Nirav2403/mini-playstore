import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import AppContent from './components/AppContent';
import SideBar from './components/SideBar';

const KEY = "AIzaSyB3rwzz_kMR9xl1goMF3vvi3iY24RtZGy8"

const App = () => {
  const [youtubeData, setYoutubeData] = useState();
  const [selectedApp, setSelectedApp] = useState({
    Type: "",
    TypeList: []
  })
  const [term, setTerm] = useState("");
  const ApiData = async () => {
    // console.log(term);
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
      }
    })
    console.log("-------------------");
    setYoutubeData(response.data)
    console.log(response);
  }
  useEffect(() => {
    ApiData();
  }, [term])
  return (
    <>
      <div className="main-container">
        <SideBar selectedApp={selectedApp} setSelectedApp={setSelectedApp} term={term} setTerm={setTerm}/>
        <AppContent selectedApp={selectedApp} setSelectedApp={setSelectedApp} term={term} setTerm={setTerm} youtubeData={youtubeData}/>
      </div>
    </>
  );
}

export default App;
