import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
      <>
        <Wrap>
            <Number>1</Number>
            <Title>안녕하세요 👋<br/></Title>
            <Description>저는 한번에 버그 없이 코드를 짜는 데에는 재능이 없지만, <br/>버그를 맞닥뜨리면 다양한 해결방법을 생각하며 풀어나가는 것을 좋아하는 중학생 개발자입니다.</Description>
            <BlogButton onClick={() => window.location.href = "https://blog.anojds.com"}>블로그</BlogButton>
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
    color: #0000003f;
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
    color: #000;
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

const BlogButton = styled.span`
    font-size: 20px;
    color: #fff;
    background-color: #0084ff;
    padding: 10px 40px 10px 40px;
    border-radius: 10px;
    :hover {
        cursor: pointer;
    }
`

export default About