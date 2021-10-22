import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    
    const List = ["Videos","Movies","Songs","Games","News","Blogs"]

    const handleClick = (item,index) => {
       props.setSelectedApp({...props.selectedApp,Type:item})
       props.setTerm(item)
       setCurrentIndex(index)
    }

    const listMenu = () => {
        return List.map((item,index)=>{
            const className = currentIndex===index ? "active" : "disable";
            return(
                <div className="li-container">
                    <Link to={`/${item}`}><li id={item} key={item} className={className} onClick={()=>handleClick(item,index)}>{item}</li></Link>
                </div>
            )
        })
    }
    return (
            <div className="nav-container">
                <div className="search-section">
                    <button type="submit"><i class="fa fa-search"></i></button>
                    <input type="text" name="search" value={props.term} onChange={(e)=>props.setTerm(e.target.value)} placeholder="search"/>
                </div>
                <nav className="nav-li-container">
                    {listMenu()}
                </nav>
                <div className="nav-btn">
                    <button className="other-btn" type="button"><i className="fa fa-bell"></i></button>
                    <button className="other-btn" type="button"><i className="fa fa-heart"></i></button>
                    <button className="log-btn" type="button">Log in</button>
                </div>
            </div>
    )
}

export default Navigation;
