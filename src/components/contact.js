import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
      <>
        <Wrap>
            <Number>5</Number>
            <Title>소셜 📞<br/></Title>
            <ContactWrap background="#16d60fff" border="#12b90c">
                <ContactTitle>Github</ContactTitle>
                <ContactValue>@anojds</ContactValue>
            </ContactWrap>
            <ContactWrap background="#0fa8d6ff" border="#0c91b9">
                <ContactTitle>Twitter</ContactTitle>
                <ContactValue>@anojds</ContactValue>
            </ContactWrap>
            <ContactWrap background="#0f4ed6ff" border="#0c46b9">
                <ContactTitle>Discord</ContactTitle>
                <ContactValue>anojds#1234</ContactValue>
            </ContactWrap>
            <ContactWrap background="#d60f0fff" border="#910808">
                <ContactTitle>Mail</ContactTitle>
                <ContactValue>mail@anojds.com</ContactValue>
            </ContactWrap>
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
    color: #16d60f3f;
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
    color: #16d60f;
    margin-bottom: 10px;
    text-align: center;
    line-height: 55px;
    z-index: 1;
    margin-bottom: 20px;
`

const ContactWrap = styled.span`
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    margin: 20px 20px 20px 20px;
    background-color: ${(props) => props.background};
    padding: 10px 20px 10px 20px;
    color: #fff;
    border-radius: 10px;
    border: 2.5px solid ${(props) => props.border};
    display: flex;
    width: 300px;
    justify-content: space-between;
`

const ContactTitle = styled.span`
`

const ContactValue = styled.span`
`

export default Contact