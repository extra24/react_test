import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Kakao from "../LoginCheck/KakaoLogin";
import KakaoLink from "../SocialLink/KakaoLink";
import Facebook from "../LoginCheck/Facebook";


export default() =>(
    <Router>
        <Header />
        <Route path = "/kakao" component={Kakao} />
        <Route path = "/kakaoLink" component={KakaoLink} />
        <Route path = "/facebook" component={Facebook} />
    </Router>
)