import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component{
    
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email:'',
        picture:''
    }
    
    responseFacebook = response => {
        this.setState({

            isLoggedIm:true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            // picture: response.picture.data.url
        });
    };

    componentClicked = () => console.log('clicked');


    render(){

        let fbContent;

        if(this.state.isLoggedIn){ //Login한 회원의 정보를 보여줌

            fbContent = (

                <div style={{width:'400px', margin: 'auto', background:'green', padding:'20px'}}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email : {this.state.email}

                </div>

            );

        }else{ // Facebook 에서 제공하는 API를 받아 로그인 버튼 기능 추가

            fbContent = (<FacebookLogin
                
                appId="505042576840476"                 //본인이 부여받은 appID 번호 입력
                autoLoad={true}                        //실행과 동시에 자동으로 로그인 팝업창이 뜸
                fields="name, email, picture"           //어떤 정보를 받아올지 입력하는 필드
                onClick={this.componentClicked}         //this. 바인딩 추가
                callback={this.responseFacebook}/>)     //this. 바인딩 추가
        }

        return(
        <div>{fbContent}</div>
        )
    }
}

export default Facebook;