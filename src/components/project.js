import React from 'react';
import styled from 'styled-components';
import './stack.css'
import donatlyImg from '../asset/main_screen.png'

const Project = () => {
    return (
      <>
        <Wrap>
            <Number>3</Number>
            <Title>프로젝트 💼</Title>
            <ItemTitle>Donatly.us</ItemTitle>
            <ItemDescription>카카오 송금 링크 / 토스 송금 아이디 혹은 페이팔 아이디를 이용한, 크리에이터 후원 중개 서비스</ItemDescription>
            <ItemButton onClick={() => window.location.href = "https://donatly.us"}>바로가기</ItemButton>
            <ItemImg src={donatlyImg}/>
        </Wrap>
      </>
    )
}

const Number = styled.span`
    font-size: 100px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    position: relative;
    bottom: -75px;
    z-index: 0;
    color: #f47e164b;
`

const Wrap = styled.div`
    width: 100%;
    z-index: 900000;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100vh;
`

const Title = styled.span`
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    color: #fe7f35;
    margin-bottom: 50px;
    text-align: center;
    line-height: 55px;
    z-index: 1;
`

const ItemTitle = styled.span`
    margin-top: 20px;
    font-size: 35px;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
`

const ItemDescription = styled.span`
    margin-top: 5px;
    font-size: 23px;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    margin: 10px 20px 0px 20px;
`

const ItemImg = styled.img`
    margin-top: 50px;
    width: 80%;
    border-radius: 20px;
`

const ItemButton = styled.button`
    margin-top: 30px;
    width: 250px;
    height: 50px;
    background-color: #fe7f35;
    border: 0px;
    color: #fff;
    border-radius: 10px;
    font-size: 20px;
    :hover {
        cursor: pointer;
    }
`


export default Project