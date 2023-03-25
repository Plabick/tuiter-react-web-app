import React from 'react';
import { useDispatch } from 'react-redux';
import { likeTuit, unlikeTuit, deleteTuit } from "./tuits-reducer";
import TuitStats from './TuitStats';

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const handleLike = () => {
        if (tuit.liked) {
            dispatch(unlikeTuit(tuit._id));
        } else {
            dispatch(likeTuit(tuit._id));
        }
    };

    console.log(tuit);
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
                />
                    </div> </div></div>
        </div>
    );
};

export default TuitItem;
