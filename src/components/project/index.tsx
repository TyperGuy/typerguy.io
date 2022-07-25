
import { ArrowSquareOut } from 'phosphor-react';
import {Container,Cover, Description, Flex, Footer, Link, Tecnology, Title} from './Project.styles';


const Project : React.FC =()=>{

  return(
    <Container>
      <Cover src={"/cover.webp"}/>
      <Title>Ministério ao</Title>
      <Description>
        An all-in-one starter kit for high-performance e-commerce sites.
      </Description>
      <Footer>
        <Flex>
          <Tecnology/>
          <span>Typescript</span>
        </Flex>
        <Link>
          <ArrowSquareOut size={22} weight="fill"/>
        </Link>
      </Footer>
    </Container>
  )
}

export default Project;
