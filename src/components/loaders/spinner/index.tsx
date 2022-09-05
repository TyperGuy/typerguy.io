import Styles from "./Spinner.module.css";
export default function Spinner(){
  return(
   <div className={Styles.container}>
     <div className={Styles.ripple}><div></div><div></div></div>
     <span>Espere um pouquinho estou a preparar tudo..</span>
   </div>
  )
}
