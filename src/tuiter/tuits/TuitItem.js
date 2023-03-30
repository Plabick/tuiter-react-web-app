import React from 'react';
import { useDispatch } from 'react-redux';
import TuitStats from './TuitStats';

import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";
const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    const handleLike = () => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1}));
    };

    const handleDislike = () => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + 1}));
    };
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-auto">
                        <img
                            src={tuit.image}
                            className="rounded-circle"
                            style={{ width: '40px' }}
                        />
                    </div>
                    <div className="col">
                <h5 className="card-title">{tuit.userName} <small>{tuit.handle} | {tuit.time}</small>         <i className="bi bi-x-lg float-end"
                                                                                                                 onClick={() => deleteTuitHandler(tuit._id)}></i></h5>
                <p className="card-text">{tuit.tuit}</p>
                <TuitStats
                    replies={tuit.replies}
                    retuits={tuit.retuits}
                    likes={tuit.likes}
                    liked={tuit.liked}
                    onLike={handleLike}
                    dislikes={tuit.dislikes}
                    onDislike={handleDislike}
                />
                    </div> </div></div>
        </div>
    );
};

export default TuitItem;
