import React from 'react'

const AppLayout = ({youtubeData}) => {
    const appData = () => {
        return youtubeData.items.map((item)=>{
            return(
                <div className="app-data-container">
                    <img  src={item.snippet.thumbnails.medium.url} />
                    <div>{item.snippet.title}</div>
                </div>
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
