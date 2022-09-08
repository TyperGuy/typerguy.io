import styled,{keyframes} from 'styled-components';




export const Container = styled.div`
    width: 90%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    background-color:red;

  @media only screen and (min-width: 768px ) {
    max-width: 1128px;
    width: 1128px;
    display: flex;
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
  padding:30px;
  gap: 10px ;
`
export const Content = styled.div`
  color: #222;
  font-size: 1.5em;
  text-align: center;
`
export const H1 = styled.h1`
  font-size: 2.5em;
  color: #6667ba;
  margin-top: -3px;
  text-align: center;
`
export const Span = styled.span`
  font-size: 2em;
  text-align: center;
`


export const Hi = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
`




export const Pulse = keyframes`
	0% {
		box-shadow: 0 0 0  #6667ab;
	}
	100% {
		box-shadow: 0 0 40px 10px rgba(255, 206, 67, 0);
	}
`;

export const Image = styled.img`
  height: 150px;
  border-radius: 8px;
  @media screen and (max-width: 1276px) {
    margin-bottom: 20px;
  }

  &:hover{

  }
`
export const Circle = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  animation: ${Pulse} 2s infinite;

`







