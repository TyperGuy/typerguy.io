import { FC, useState } from 'react';
import { Container ,Circle, ContentContainer, Header, Body, Title, Schedule} from './landing-page-float-buttons.styles'
import {DotsThreeOutline,X} from 'phosphor-react';

export const FloatingButton: FC = () => {
  const sendToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const [isOpen,setIsOpen] = useState(false);

  return(
    <Container>
      {isOpen&&
        <ContentContainer>
          <Header/>
          <Body>
            <div>
              <Title>Hi, there 👋</Title>
              <div style={{color:'#fff',opacity:.5}}>Ask me anything, or send your feedback</div>
            </div>
            <Schedule>
              
            </Schedule>
          </Body>
        </ContentContainer>}
      <Circle onClick={()=>setIsOpen(!isOpen)}>
      {
        isOpen?
          <X size={28} weight="fill" /> :
          <DotsThreeOutline
            className='top'
            size={30}
            weight='fill'
          />
      }
      </Circle>
    </Container>
  )
}

export default FloatingButton;

