import React, { useEffect } from 'react';
import { useState } from 'react';
import PlayStore from '../style/playstore-icon.jpg'

const SideBar = ({selectedApp, setSelectedApp, setTerm, term}) => {
    const [currentIndex, setCurrentIndex] = useState(null)
    const [currentType, setCurrentType] = useState("");
    const Movies = ["Home", "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Sport", "Thriller", "War", "Western"]
    const Videos = ["Home", "Commentary", "Product Reviews", "How-Tos/Tutorials", "Top Lists", "Comedy", "Challenges", "Reactions", "Q&A", "Interview", "Docuseries", "Educational", "Music Videos", "Narratives", "Gaming", "ASMR", "Sports"]
    const Musics = ["Home", "Classical Music", "Bollywood", "Rock Music", "Garba", "Bhajan"]
    
    useEffect(()=>{
        setCurrentType(selectedApp.Type)
    },[selectedApp.Type])

    const handleClick = (item,index) => {
        setCurrentIndex(index)
        if(item === "Home"){
            setTerm(currentType)
        }else{
            setTerm(item + " " + currentType)
        }
    }

    const showTypeList = () => { 
        switch (selectedApp.Type) {
            case "Videos":
                return Videos.map((item,index)=> {
                    const className = currentIndex===index ? "active-menu" : "disable-menu";
                    return <li className={className} key={item} onClick={() => handleClick(item,index)}>{item}</li>
                })
            case "Movies":
                return Movies.map((item,index)=> {
                    const className = currentIndex===index ? "active-menu" : "disable-menu";
                    return <li className={className} key={item} onClick={() => handleClick(item,index)}>{item}</li>
                })
            case "Songs":
                return Musics.map((item,index)=> {
                    const className = currentIndex===index ? "active-menu" : "disable-menu";
                    return <li className={className} key={item} onClick={() => handleClick(item,index)}>{item}</li>
                })
            default:
                break;
        }
    }
    // const Videos
    // const listMenu = ["Videos", "Movies", "Songs", "Games", "Blogs"]
    // const showNavList = () => {
    //     return listMenu.map((list, index) => {
    //         return(
    //             <li key={index}>
    //                 {list}
    //             </li>
    //         )
    //     })
    // }
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-header">
                    <img className="sidebar-logo" src={PlayStore} alt="Not Found" />
                    <span className="sidebar-title">Mini-Playstore</span>
                </div>
                <nav className="sidebar-nav-menu">
                    {showTypeList()}
                </nav>
            </div>
        </>
    )
}

export default SideBar;