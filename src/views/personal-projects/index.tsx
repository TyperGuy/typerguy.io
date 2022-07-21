
import {Container} from './Projects.styles';
import Lottie from 'react-lottie';
import animationData from '../../lotties/not-found.json';

const Projects : React.FC =()=>{

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return(
    <Container>
      <div style={{textAlign: 'center',color:'#b6bbc4'}}>
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />
        <h2>Personal Projects</h2>
        <span>Resolvendo...</span>
      </div>
    </Container>
  )
}

export default Projects;
