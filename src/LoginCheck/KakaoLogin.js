import React, { Component } from "react";
import Kakao from "kakaojs";
import kakaologo from "../images/svg/kakao.svg";

class KakaoLogin extends Component {
  //테스트
  componentDidMount() {
    // Kakao.init('f55d15af5a8a127be276536e6468a8bc'); //카카오 developer API사이트에서 발급받은 JavaScript Key
    // console.log(Kakao);
    Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      size: "small",
      success: function (authObj) {
        alert(JSON.stringify(authObj));
        Kakao.API.request({
          url: "/v1/user/me",
          success: function (res) {
            console.log(res.properties.nickname);
          },
          fail: function (error) {
            alert(JSON.stringify(error));
          },
        });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  }

  render() {
    return (
      <div>
        <a id="kakao-login-btn"></a>
      </div>
    );
  }
}

export default KakaoLogin;
