import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader =() => (
  <ContentLoader
    speed={5}
    width={300}
    height={200}
    viewBox="0 0 300 200"
    backgroundColor="#f1f1f1"
    foregroundColor="#dbdbdb"
  >
    <rect x="9" y="36" rx="0" ry="0" width="403" height="328" />
  </ContentLoader>
)

export default MyLoader

