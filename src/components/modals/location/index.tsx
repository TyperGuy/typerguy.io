import { FC, useImperativeHandle, forwardRef, useState, useCallback, } from 'react';
import { ChildContainer, Container} from './modal.styles';
import Settings from './settings';
import Dialog from './dialog';
import Reasons from './reasons';


const typeModal ={
  ask : 'askModal',
  choose : 'chooseModal',
  information : 'infModal'
}
const Modal: FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [targetModal,setTargetModal] = useState(typeModal.ask);

 if(showModal)
  return (
      <ChildContainer>
      {
        (targetModal===typeModal.ask) &&
        <Dialog setShowModal={setShowModal} setTargetModal={setTargetModal}/>
      }
      {
        (targetModal===typeModal.information) &&
        <Reasons setShowModal={setShowModal} setTargetModal={setTargetModal}/>
      }
      {
        (targetModal===typeModal.choose) &&
        <Settings setShowModal={setShowModal} setTargetModal={setTargetModal}/>
      }
      </ChildContainer>
  )

  return null

}

export default Modal;

