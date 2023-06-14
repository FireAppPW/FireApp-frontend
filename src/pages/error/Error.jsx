import React, {useEffect, useState} from "react";
import "./error.scss";
import errorImage from "../../assets/images/error3.png"

const Error = () => {
    return (
        <div className="wrapper">
            <div className="error__left">
                <div className="error__left-container">
                    <h2 className="error__left__page-title">
                        FIRE<em>APP.COM</em>
                    </h2>
                    <h1 className="error_left__error-title">
                        OOPS ..
                    </h1>
                    <h2>Permission Denied</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
            <svg class="error__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f65b4f" fill-opacity="1" d="M0,64L17.1,90.7C34.3,117,69,171,103,170.7C137.1,171,171,117,206,128C240,139,274,213,309,224C342.9,235,377,181,411,181.3C445.7,181,480,235,514,224C548.6,213,583,139,617,101.3C651.4,64,686,64,720,58.7C754.3,53,789,43,823,42.7C857.1,43,891,53,926,53.3C960,53,994,43,1029,69.3C1062.9,96,1097,160,1131,192C1165.7,224,1200,224,1234,208C1268.6,192,1303,160,1337,165.3C1371.4,171,1406,213,1423,234.7L1440,256L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path>
            </svg>
            <div className="error__right">
                <div className="error__right-container">
                    <img src={errorImage} alt=""/>

                </div>
            </div>
        </div>
    );
};

export default Error;
