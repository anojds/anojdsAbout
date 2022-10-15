import React from 'react';
import styled from 'styled-components';

const Copyright = () => {
    return (
      <>
        <Wrap>
            <Title>ⓒ 2022 anojds. All Rights Reserved.</Title>
        </Wrap>
      </>
    )
}

const Wrap = styled.div`
    width: 100%;
    height: 80vh;
    z-index: 900000;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    justify-content: center;
`

const Title = styled.span`
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    color: #000;
    text-align: center;
`

export default Copyright