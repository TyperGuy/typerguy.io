import styled,{keyframes} from 'styled-components';




export const Container = styled.div`
  min-height : 500px;
  max-width: 1128px;
  width: 1128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`;
export const Content = styled.span`
  line-height: 1;
  color: #222;
  font-size: calc(1px + 1vw);
  max-width: 500px;
  margin:0;
`

export const Underlined = styled.strong`

  -webkit-background: #6667ab;
  -webkit-text-fill-color: #6667ab;
  position: relative;
  display: inline-block;
  &:after{
    content: "";
    position: absolute;
    display: block;
    border-top: 4.9px solid #222;
    border-radius: 47%;
    left: -6px;
    right: -6px;
    bottom: -9px;
    height: 11px;
    transform: rotate(-0.6deg);
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

export const Image = styled.img`
  height: 400px;
`
export const Circle = styled.div`
  display: grid;
  place-items: center;
  border-radius: 50%;
  animation: ${Pulse} 2s infinite;

`







