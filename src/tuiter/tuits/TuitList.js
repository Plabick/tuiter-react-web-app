import React from 'react';
import { useSelector } from 'react-redux';
import TuitItem from './TuitItem';

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);

    return (
        <div>
            {tuits.map(tuit => (
                <TuitItem key={tuit._id} tuit={tuit} />
            ))}
        </div>
    );
};

export default TuitList;
