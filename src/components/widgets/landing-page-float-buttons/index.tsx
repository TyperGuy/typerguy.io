import { FC, useState } from 'react';
import { Container ,Circle, ContentContainer, Header, Body, Title, Schedule,ScheduleBtn, FQA, Question, Row, Answer, Div} from './landing-page-float-buttons.styles'
import {CalendarCheck, Clock, DotsThreeOutline,X} from 'phosphor-react';
import {BsChevronDown as Arrow} from 'react-icons/bs';



const Questions = [
  {
    id: 1 ,
    question : 'Are you open to realocate',
    answer : ' I am open to realocate. But, not emediatly, i need 2 months at least.'
  },
  {
    id: 2 ,
    question : 'Which currency do you prefere ',
    answer : 'I Prefere to receive all my payments in US Dollar or Euro.'
  },
  {
    id: 3 ,
    question : 'Where do you receive all payments ?',
    answer : ' Generaly i use WISE or Paypal. But i am open to explore other solutions.'
  }
]

export const FloatingButton: FC = () => {
  const sendToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const [isOpen,setIsOpen] = useState(false);
  const [isSpanded,setIsSpanded] = useState(1);

  return(
    <Container>
      {isOpen&&
        <ContentContainer>
          <Header/>
          <Body>
            <Div>
              <Title>Hi, there 👋</Title>
              <div style={{color:'#fff',opacity:.5}}>Ask me anything, or send your feedback</div>
            </Div>
            <Schedule>
              <div style={{fontWeight:600,fontSize:'1.1em'}}>Schedule a conversation</div>
              <div style={{display:'flex', alignItems:'center', gap:5}}>
                <div>
                  <span style={{marginLeft:4, fontSize:'1em', color:'rgba(0,0,0,.5)'}}>I'm open to meet</span>
                  <div style={{display:'flex',alignItems:'center',gap:5}}>
                    <Clock style={{color:'blue'}} size={20} weight="light" />
                     Monday, 19:00,GMT+1
                  </div>
                </div>
              </div>
              <ScheduleBtn>
                <CalendarCheck size={20} weight="fill"/>
                SCHEDULE MEETING
              </ScheduleBtn>
            </Schedule>
            <FQA>
              <div style={{fontWeight:600,fontSize:'1.1em'}}>Most Asked Questions</div>
              <div>
                {
                  Questions.map((fqa)=>{
                    return(
                      <Question>
                      <Row onClick={()=>setIsSpanded(fqa.id)}>
                        <span style={{fontWeight:'600',fontSize:'1.01em'}}>{fqa.question}</span>
                        <Arrow style={{
                          fontSize:'1.2em',
                          transform: `rotate(${(isSpanded===fqa.id)?'180deg':'0deg'})`,
                          transition: 'all .5s ease-in-out'
                        }}/>
                      </Row>
                        <Answer isOpen={isSpanded===fqa.id}>
                         {fqa.answer}
                        </Answer>
                   </Question>
                    )
                  })
                }
              </div>
            </FQA>
          </Body>
        </ContentContainer>}
      <Circle onClick={()=>setIsOpen(!isOpen)}>
      {
        isOpen?
          <X size={20} weight="fill" /> :
          <DotsThreeOutline
            className='top'
            size={20}
            weight='fill'
          />
      }
      </Circle>
    </Container>
  )
}

export default FloatingButton;

