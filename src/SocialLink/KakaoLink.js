import React, { Component } from 'react';
import Kakao from 'kakaojs';

class KakaoLink extends Component{
    componentDidMount(){
        // Kakao.init('f55d15af5a8a127be276536e6468a8bc'); //카카오 developer API사이트에서 발급받은 JavaScript Key
        Kakao.Link.createTalkLinkButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            label: '라벨',
            image:{
                src: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                width:'280',
                height: '301'
            },
            webButton:{
                text:'버튼 텍스트'
            },
            fail: function(){
                alert('KakaoLink is currently only supported in iOS and Android platforms.');
            }            
        });
    }

    render(){
        return (
          <div>
            <a id="kakao-link-btn"></a>
          </div>
        );
      }

}

export default KakaoLink;