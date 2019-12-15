import React, { Fragment } from 'react';
import './PhotoCard.css';

const PhotoCard = () => {
    return (
        <Fragment>
            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12" style={{padding: 0}} >
                <div className="photo-card cssanimation fadeIn forth col-md-12 col-lg-12 col-sm-12 col-xs-12" style={{padding: 0}}>
                    <div className="cover">
                        <div className="content">
                            <h4>Destiny Ajakaiye</h4>
                            <p>Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PhotoCard;