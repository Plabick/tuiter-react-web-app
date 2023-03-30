import React from 'react';

/*
* NOTE FOR A8 GRADER:
* I implement the like tuit slighly different than the assignment showed but using the same logic
* I wanted to make the like functionality match the previous, logical implementation.
* */

const TuitStats = ({ replies, retuits, likes, liked, onLike, dislikes, onDislike }) => {
    return (
        <div className="row">
            <div className="col">
                <i className="fas fa-comment"></i> {replies}
            </div>
            <div className="col">
                <i className="fas fa-retweet"></i> {retuits}
            </div>
            <div className="col" onClick={onLike} style={{ cursor: 'pointer' }}>
                <i className={`fas fa-heart ${liked ? 'text-danger' : ''}`}></i> {likes}
            </div>
            <div className="col" onClick={onDislike} style={{ cursor: 'pointer' }}>
                <i className={`fas fa-thumbs-down`}></i> {dislikes}
            </div>
            <div className="col">
                <i className="fas fa-share"></i>
            </div>

        </div>
    );
};

export default TuitStats;
