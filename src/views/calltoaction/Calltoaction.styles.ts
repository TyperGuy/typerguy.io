import styled,{keyframes} from 'styled-components';




export const Container = styled.div`
    width: 90%;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-between;

  @media only screen and (min-width: 768px ) {
    max-width: 1128px;
    width: 1128px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
  }

  /*@media screen and (max-width: 1276px) {
   flex-direction: column-reverse;
   align-items: flex-start;
   width: 90%;
   padding: 10px;
  }*/
`;

export const ButtonCotainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  gap: 20px ;
  @media only screen and (min-width: 768px ) {
    flex-direction: row ;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px ) {
    width: 700px ;
  }
`
export const Content = styled.div`
  color: #222;
  font-size: 1.5em;
  text-align: center;
  @media only screen and (min-width: 768px ) {
    text-align:left ;
  }
`
export const H1 = styled.h1`
  font-size: 2.5em;
  color: #6667ba;
  margin-top: -3px;
  text-align: center;
  @media only screen and (min-width: 768px ) {
    text-align:left;
  }
`
export const Span = styled.span`
  font-size: 2em;
  text-align: center;
`


export const Hi = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px ) {
    align-items: flex-start;
  }
`




export const Pulse = keyframes`
	0% {
		box-shadow: 0 0 0  #6667ab;
	}
	100% {
		box-shadow: 0 0 40px 10px rgba(255, 206, 67, 0);
	}
`;
const fadeIn = keyframes`
  0%{
   opacity: 0;
  }
  100%{
  opacity: 1;
  }
`

export const Image = styled.img`
  height: 150px;
  border-radius: 8px;
  animation: ${fadeIn} 2s;
  @media only screen and (min-width: 768px ) {
    height: 300px ;
  }
`
export const Circle = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  animation: ${Pulse} 2s infinite;

`







