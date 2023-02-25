import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item"> <i className="fab fa-twitter"></i>
        </a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fa fa-home"></i> Home
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag"></i> Explore
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-bell"></i>  Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa fa-envelope"></i> Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark"></i> Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list"></i>  Lists
            </a>
            <a className={`list-group-item
                ${active === 'profile'?'active':''}`}>
                <i className="fa fa-user"></i> Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="fa fa-ellipsis-h"></i>  More
            </a>
        </div>
    );
};
export default NavigationSidebar;

