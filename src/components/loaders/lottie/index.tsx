import Styles from "./Doodle.module.css";
import animationData from '../../../lotties/doodle.json';
import Lottie from "react-lottie";
export default function Doole(){

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return(
   <div className={Styles.container}>
     <div className={Styles.ripple}>
      <Lottie
	      options={defaultOptions}
        height={150}
        width={150}
      />
     </div>
     <span className={Styles.message}>Espere um pouquinho estou a preparar tudo..</span>
   </div>
  )
}
