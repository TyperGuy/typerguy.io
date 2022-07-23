import {FC, useState} from 'react';
import dynamic from 'next/dynamic';
import {Container, Content, Underlined,Image, Circle} from './Calltoaction.styles';
import Button from '../../components/button';
import PlayButton from '../../components/button/PlayButton';
import { PlayCircle } from 'phosphor-react';
import Modal from '../../components/modals/generic';
import Form from 'components/speaker-form';


const VideoWithNoSSR = dynamic(
  () => import('../../components/video'),
  { ssr: false }
)


const NameStyle = {
  fontSize: 'calc(8.3333px + 1.85185vw)',
}
const SloganStyle = {
  fontSize: 'calc(8.3333px + 1.85185vw)',
  color: '#6667ba',
  marginTop: -5
}

const Calltoaction: FC = () => {

    const [isOpen,setIsOpen] =useState(false);
    const [isOpenVideo,setIsOpenVideo] =useState(false);
    return (
      <div style={{width:'100vw',display:'grid',placeItems:'center', backgroundColor:' #f8f9fa'}}>
          <Container>
          <div style={{display: 'flex', flexDirection:'column', gap:'2rem'}}>
          <div>
              <span style={NameStyle}>Hi, may name is Rai</span>
              <h1 style={SloganStyle}>I Build things for Web</h1>
              <Content>I'm a frontend developer passionate about building high performance frontend solutions.</Content>
          </div>
            <div
              style={{
                display: 'flex',
                gap: '1rem'
              }}
            >
              <Button
                onClick={setIsOpen}>
                QUERO SER PALESTRANTE
              </Button>
              <PlayButton
                onClick={setIsOpenVideo}>
                <Circle>
                  <PlayCircle size={32} weight="fill" />
                </Circle>
                    QUERO SER
              </PlayButton>
            </div>
          </div>
          <Image src="protest.png" alt="Protest" />
          <Modal setShowModal={setIsOpen} isOpen={isOpen}>
            <Form/>
          </Modal>
          <Modal setShowModal={setIsOpenVideo} isOpen={isOpenVideo}>
            < VideoWithNoSSR/>
          </Modal>
        </Container>
      </div>
    )
}

export default Calltoaction;
