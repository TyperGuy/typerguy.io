import ContentLoader from "react-content-loader"
export default function MyLoader(){
  return(
    <ContentLoader
    speed={5}
    width={300}
    height={300}
    viewBox="0 0 150 150"
    backgroundColor="#f1f1f1"
    foregroundColor="#cacaca"
    >
      <circle cx="74" cy="74" r="73" />
    </ContentLoader>
  )
 }





