import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Kakao from 'kakaojs';

Kakao.init('f55d15af5a8a127be276536e6468a8bc'); //카카오 API 키 부여, 최초 1회만 실행하기 위해서 Header.js에 선언

class Header extends Component {
    render(){
        return (
        <div>
            <ul>
                <ol> 
                    <Link to="/kakao">Kakao</Link>
                </ol>
                <ol> 
                    <Link to="/facebook">Facebook</Link>
                </ol>
                <ol> 
                    <Link to="/kakaoLink">KakaoLink</Link>
                </ol>
            </ul>
        </div>
        )
    }
}

export default Header;