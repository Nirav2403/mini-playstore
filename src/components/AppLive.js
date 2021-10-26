import React from 'react'

const AppLive = (props) => {
    console.log("=========================================================", props);
    const video = props.selectedApp.selectedVideo
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    const videoList = () => {
        return props.youtubeData.items.map((item) => {
            return (
                <div className="video-list-menu" onClick={() => handleVideo(item)}>
                    <img src={item.snippet.thumbnails.medium.url} />
                    <div className="video-list-description">
                        <div className="video-list-title">{item.snippet.title}</div>
                        <p>{item.snippet.channelTitle}</p>
                    </div>
                </div>
            )
        })
    }

    const handleVideo = (item) => {
        props.selectedApp.selectedVideo = item;
        props.history.push(`/${props.selectedApp.Type}/${item.id.videoId}`)
    }
    return (
        <div className="display-container">
            <div className="video-container">
                <iframe src={videoSrc}></iframe>
                <div className="video-description">
                    <div className="video-title">{video.snippet.title}</div>
                    <div className="channel-name">{video.snippet.channelTitle}</div>
                    <div className="video-description-text">{video.snippet.description}</div>
                </div>
            </div>
            <div className="video-list-container">
                {videoList()}
            </div>
        </div>
    )
}

export default AppLive;
