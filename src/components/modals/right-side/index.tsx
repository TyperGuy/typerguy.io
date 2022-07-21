import { X } from 'phosphor-react';
import { FC, useImperativeHandle, forwardRef, useState, useCallback, } from 'react';
import { Container,ContentContainer as Child, Row,CloseBtn, Header} from './modal.styles';

const typeModal ={
  ask : 'askModal',
  choose : 'chooseModal',
  information : 'infModal'
}
const Modal: FC <{isOpen:boolean,setShowModal:(isOpen:boolean)=>void} > = ({children,isOpen,setShowModal}) => {

 if(isOpen)
  return (
    <Container>
      <Child>
        <Row/>
        <Header>
          <CloseBtn onClick={() =>setShowModal(false)}>
            <X size={16} />
          </CloseBtn>
        </Header>
        {children}
      </Child>
    </Container>
  )

  return null

}

export default Modal;
