import React from 'react';

const TuitStats = ({ replies, retuits, likes, liked, onLike }) => {
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
            <div className="col">
                <i className="fas fa-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;
