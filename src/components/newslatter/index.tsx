import { FC} from 'react';
import { Container, ContentContainer as Inner, Content, TextContainer, Button, Input,ButtonCotainer} from './NewsLatter.styles';


const NewsLatter : FC  = () => {

  return (
    <Container>
      <Inner>
        <Content>
          <TextContainer>
            <span>Want to dive into technology and learning?</span>
            <div>Receive the newsletter that i personally
              write, with insights from the job market, science and
              software development</div>
          </TextContainer>
          <ButtonCotainer>
            <Input placeholder="write your email" />
            <Button>I want to subscribe</Button>
          </ButtonCotainer>
        </Content>
      </Inner>
    </Container>
  )


}

export default NewsLatter;
