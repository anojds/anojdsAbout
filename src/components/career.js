import React from 'react';
import styled from 'styled-components';

const Career = () => {
    return (
      <>
        <Wrap>
            <Number>4</Number>
            <Title>Career ✨</Title>
            <Description>2022년 SSF(선린인터넷고등학교 소프트웨어 나눔축제) 참가</Description>
        </Wrap>
      </>
    )
}

const Number = styled.span`
    font-size: 100px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    position: relative;
    top: 80px;
    z-index: 0;
    color: #e73fed3f;
`

const Wrap = styled.div`
    width: 100%;
    height: 80vh;
    z-index: 900000;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    @media screen and (min-width: 1300px) {
		margin-top: 300px;
	};
`

const Title = styled.span`
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    color: #e73fed;
    margin-bottom: 10px;
    text-align: center;
    line-height: 55px;
    z-index: 1;
`

const Description = styled.span`
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    margin: 20px 20px 20px 20px;
`

export default Career