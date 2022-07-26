
import {Container,Cover, Description, Flex, Footer, Link, Tecnology, Title} from './Experience.styles';
import Lottie from 'react-lottie';
import animationData from '../../lotties/not-found.json';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
}; 

const Project : React.FC =()=>{

  return(
    <Container>
      <div style={{textAlign: 'center',color:'#b6bbc4'}}>
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />
        <Title>Looks like something went wrong</Title>
        <span>Solving...</span>
      </div>
    </Container>
  )
}

export default Project;
