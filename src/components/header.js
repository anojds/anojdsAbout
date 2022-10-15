import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [ScrollState, setScrollState] = useState(false);

    const handleScroll = () => {
		if (window.scrollY === 0) {
			setScrollState(false);
		} else {
			setScrollState(true);
		}
	};

    useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

    return (
        <>
        <Wrap background={ScrollState}>
            <div>
                <b style={{margin: '0px 5px 0px 30px', fontSize: '20px'}}>Developer</b>
                <span style={{fontSize: '20px'}}>anojds</span>
            </div>
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    background-color: ${props => props.background && '#fff'};
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0px;
    font-family: 'Noto Sans KR', sans-serif;
    z-index: 9999999999999999999999999999;
`

export default Header