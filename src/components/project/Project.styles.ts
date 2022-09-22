import styled from "styled-components";



export const Container = styled.div`
  width: 300px;
  height: 200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  padding: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  transition: all .3s ease-in-out;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    margin-top: -4px ;
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
  width: 26px ;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  transition: all ease-in-out .4s;
  background-color:rgba(0, 0, 0,.1);
  color: #555;
  :hover{
    background-color: rgba(0,0,255,.1);
    color: blue;
  }
`;
export const GitHub = styled.div`
  width: 26px ;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  transition: all ease-in-out .4s;
  background-color:rgba(0, 0, 0,.1);
  color: #555;
  :hover{
    background-color:rgba(0, 255, 0,.1);
    color: rgb(0, 100, 0);
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
