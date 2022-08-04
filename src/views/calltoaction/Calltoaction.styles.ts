import styled,{keyframes} from 'styled-components';




export const Container = styled.div`
  max-width: 1128px;
  width: 1128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;

  @media only screen and (min-width: 768px ) and (max-width: 768px) {
    background-color: red;
    
  }
  @media screen and (max-width: 600px) {

  }
  @media screen and (max-width: 1276px) {
   flex-direction: column-reverse;
   align-items: flex-start;
   width: 90%;
   padding: 10px;
  }
`;
export const Content = styled.div`
  color: #222;
  font-size: 1.5em;
  width: 400px;
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
  height: 400px;
  border-radius: 8px;
  @media screen and (max-width: 1276px) {
    margin-bottom: 20px;
  }
`
export const Circle = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  animation: ${Pulse} 2s infinite;

`







