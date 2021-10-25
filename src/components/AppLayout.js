import React from 'react'
import { Link } from 'react-router-dom'

const AppLayout = ({ youtubeData, ...props }) => {

    const handleSelectedVideo = (item) => {
        console.log("item==========>",item)
        props.selectedApp.selectedVideo = item
    }
    const appData = () => {
        console.log(props);
        return youtubeData.items.map((item) => {
            console.log(props.selectedApp.Type);
            return (
                <Link to={`/${props.selectedApp.Type}/${item.id.videoId}`}>
                    <div className="app-data-container" onClick={()=>handleSelectedVideo(item)}>
                        <img src={item.snippet.thumbnails.medium.url} />
                        <div>{item.snippet.title}</div>
                    </div>
                </Link>
            )
        })
    }
    return (
        <div className="app-section">
            {youtubeData !== undefined ? appData() : null}
        </div>
    )
}

export default AppLayout;
