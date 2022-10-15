import React from 'react';
import styled from 'styled-components';
import './stack.css'

const Stack = () => {
    return (
      <>
        <Wrap>
            <Number>2</Number>
            <Title>Stack 💻</Title>
            <Subtitle>Strong</Subtitle>
            <Item>HTML 5 / CSS 3 / Javascript / Node.js / ReactJS / Github / AppInventor</Item>
            <Subtitle>Knowledgeable</Subtitle>
            <Item>Mysql / Python(PS) / C(PS) / Netflify / Vercel / Styled-components / Electron / Discord.js</Item>
            <Subtitle>ETC</Subtitle>
            <Item>PHP / Lua / Linux / Arduino</Item>
        </Wrap>
      </>
    )
}

const Number = styled.span`
    font-size: 100px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    position: absolute;
    top: -70px;
    z-index: 0;
    color: #16c3f472;
`

const Wrap = styled.div`
    position: absolute;
    width: 100%;
    height: 80vh;
    z-index: 900000;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.span`
    font-size: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    color: #357bfe;
    margin-bottom: 50px;
    text-align: center;
    line-height: 55px;
    z-index: 1;
`

const Subtitle = styled.span`
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
`

const Item = styled.span`
    font-size: 25px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    margin: 10px 30px 50px 30px;
    text-align: center;
`

export default Stack