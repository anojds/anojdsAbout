import styled, {keyframes} from 'styled-components';
import RightArrow from '../asset/right-arrow.png'
import GreenStar from '../asset/star.png'
import BlueStar from '../asset/star1.png'
import PinkStar from '../asset/star2.png'
const Main1 = () => {
    return (
        <>
        <Wrap>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}} >
                <Title style={{marginRight: '0px'}}>Devel</Title>
                <Title3 style={{marginRight: '0px'}}/>
                <Title>pers</Title>
                <Gradient1/>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}} >
                <Gradient2><img src={RightArrow} width={50} height={50} style={{transform: 'scaleY(-1)'}} /></Gradient2>
                <Title style={{marginRight: '0px'}}>wh</Title>
                <Title3/>
                <Title>like</Title>
                <Gradient3/>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}} >
                <BlueStarImg src={BlueStar}/>
                <Title2>new things</Title2>
                <PinkStarImg src={PinkStar}/>
                <GreenStarImg src={GreenStar}/>
            </div>
            
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -70px;
    @media screen and (max-width: 800px) {
		transform:scale(0.7); 
	};
    @media screen and (max-width: 600px) {
		transform:scale(0.5); 
	};
    @media screen and (max-width: 500px) {
		transform:scale(0.4); 
	};
    @media screen and (min-width: 1100px) {
		transform:scale(1.2); 
	};
    @media screen and (min-width: 1300px) {
		transform:scale(1.4); 
	};
`

const Title = styled.span`
    font-size: 80px;
    margin-right: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
`
const Title3 = styled.div`
    background-color: #0077ff;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    margin: 23px 30px 0px 5px;
    border: 10px solid #87bfffff;
`

const Title2 = styled.span`
    font-size: 80px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    margin-top: 20px;
    background: linear-gradient(to bottom, #fff, 87%,#ff8c00 13%);
`

const LeftToRight = keyframes`
    0%{
        left: 10px;
    }
    
    50%{
        left: 25px;
    }
    
    100%{
        left: 10px;
    }
`

const Gradient1 = styled.div`
    width: 280px;
    height: 100px;
    border-radius: 100px;
    background: rgb(26,53,231);
    background: linear-gradient(90deg, #4E62F2 0%, #D67092 100%);
    position: relative;
    left: 0px;
    animation: ${LeftToRight} 5s 0s infinite;
`

const LeftToRight2 = keyframes`
    0%{
        right: 10px;
    }
    
    50%{
        right: 25px;
    }
    
    100%{
        right: 10px;
    }
`

const Gradient2 = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00c52e;
    margin-right: 50px;
    position: relative;
    right: 0px;
    animation: ${LeftToRight2} 4s 0s infinite;
`
const Gradient3 = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #ffd102;
    margin-right: 50px;
`

const LeftToRight4 = keyframes`
    0%{
        top: 60px;
    }
    
    50%{
        top: 75px;
    }
    
    100%{
        top: 60px;
    }
`

const GreenStarImg = styled.img`
    width: 35px;
    position: relative;
    left: 30px;
    top: 60px;
    animation: ${LeftToRight4} 8s 0s infinite;
`

const LeftToRight3 = keyframes`
    0%{
        right: 100px;
    }
    
    50%{
        right: 115px;
    }
    
    100%{
        right: 100px;
    }
`

const PinkStarImg = styled.img`
    width: 35px;
    position: relative;
    bottom: 40px;
    right: 100px;
    animation: ${LeftToRight3} 10s 0s infinite;
`

const LeftToRight5 = keyframes`
    0%{
        top: 0px;
    }
    
    50%{
        top: 20px;
    }
    
    100%{
        top: 0px;
    }
`

const BlueStarImg = styled.img`
    width: 35px;
    position: relative;
    right: 30px;
    top: 0px;
    animation: ${LeftToRight5} 10s 0s infinite;
`


export default Main1