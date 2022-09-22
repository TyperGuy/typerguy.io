import { FC, useState,useEffect } from "react";
import dynamic from "next/dynamic";
import { Container, Content, Image, Circle,Hi, Span, H1, ButtonCotainer, ContentContainer } from "./Calltoaction.styles";
import Button from "../../components/button";
import PlayButton from "../../components/button/PlayButton";
import { PlayCircle } from "phosphor-react";
import Modal from "../../components/modals/generic";
import Form from "components/forms/send-email";
import CircleLoader from '../../components/loaders/skeleton/Circle-Image';

const VideoWithNoSSR = dynamic(() => import("../../components/video"), {
  ssr: false,
});


const Calltoaction: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading,setLoading] = useState(true);
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])
  return (
      <Container>
        {loading?
          <CircleLoader/>:
          <Image src="cartoon.png" alt="Protest" />
        }
         <ContentContainer>
         <Hi>
            <Span>Hi, my name is Rai</Span>
            <H1>I Build things for Mobile/Web</H1>
            <Content>
              I'm mobile and frontend developer passionate about building high
              performance frontend and mobile solutions.
            </Content>
          </Hi>
          <ButtonCotainer>
            <Button onClick={setIsOpen}>SEND ME AN EMAIL</Button>
            <PlayButton onClick={setIsOpenVideo}>
              <Circle>
                <PlayCircle size={32} weight="fill" />
              </Circle>
              WATCH PITCH
            </PlayButton>
          </ButtonCotainer>
         </ContentContainer>
        <Modal setShowModal={setIsOpen} isOpen={isOpen}>
          <Form />
        </Modal>
        <Modal setShowModal={setIsOpenVideo} isOpen={isOpenVideo}>
          <VideoWithNoSSR />
        </Modal>
      </Container>
  );
};

export default Calltoaction;
