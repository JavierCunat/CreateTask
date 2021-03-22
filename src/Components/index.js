import React from 'react';

import { Link } from 'react-router-dom';

const MainPage = () => {

    return(
        <div>
            <h2 className="title"> Pong </h2>
            <div>
                <button className="button">
            <Link to="/PongGame">Press Start to Play!</Link>
                </button>
            </div>
        </div>
    )
        
    



}


export default MainPage;