import styled from "styled-components";



export const Container = styled.div<{index:number,colorsArray :string[]}>`
  width: 300px;
  height: 322px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  transition: all .3s ease-in-out;
  &:hover{
    outline:2px solid ${props=>props.colorsArray[props.index]};
  }

`;

export const Title = styled.div`
  font-size: 1.1em;
  font-weight: 700;
`;
export const Description = styled.div`
  font-size: 1em;
  color: #666;
`;
export const Flex = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: #666;
`;
export const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  :hover{
    color: blue;
  }
`;
export const GitHub = styled.div`
  height: 20px;
  color: #666;
  :hover{
    color: #222;
  }
`;

export const Tecnology = styled.div`
  width: 15px ;
  height: 15px;
  border-radius: 50%;
  background-color: blue;
`;

export const Cover = styled.div<{src:string}>`
  width: 100%;
  height: 180px;
  background-color: red;
  border-radius:8px;
  background-image: url("${props=>props.src}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
