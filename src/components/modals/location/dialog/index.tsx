
import {Content, Title, Description, Button, Span,Linker } from './modal.styles';

const Dialog : React.FC <{setShowModal:(showModal:boolean) => void,setTargetModal:(status:string)=>void}> = ({setTargetModal,setShowModal}) =>{

  return (
      <Content>
        <div style={{width:'80%',display:'flex',gap:10,alignItems:'center'}}>
           <img style={{height:'66px', width:'65px'}} src="/location.png"/>
           <Title>Can you helpe me?</Title>
        </div>
        <Description>
          I care a lot about your privacy, and i would like to know your location for study purposes.
          <Linker onClick={() => setTargetModal('infModal')}> Click to know more about</Linker>
        </Description>

        <div style={{width:'80%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
          <Span
          onClick={() => setShowModal(false)
          }>
            Sorry, i can't
          </Span>
          <Button onClick={() => setShowModal(false)}>AUTHORIZE</Button>
        </div>
      </Content>
  )

}

export default Dialog;
