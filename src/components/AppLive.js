import React from 'react'

const AppLive = (props) => {
    console.log("=========================================================");
    // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="display-container">
            <div className="video-container">
                    {/* <iframe src={videoSrc}></iframe> */}
                <div className="video-description">
                    {/* <div className="ui header">{video.snippet.title}</div> */}
                    {/* <p>{video.snippet.description}</p> */}
                </div>
            </div>
            <div className="video-list-container"></div>
        </div>
    )
}

export default AppLive;
