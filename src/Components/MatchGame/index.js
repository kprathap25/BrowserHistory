import './index.css'

// const ImageList = props => {
//   const {listOfImageDetails, onChangeScore} = props
//   const {thumbnailUrl, id} = listOfImageDetails

//   const onClickIdScore = () => {
//     onChangeScore(id)
//   }

//   return (
//     <li>
//       <button className="btn-image" type="button" onClick={onClickIdScore}>
//         <img src={thumbnailUrl} alt="thumbnail" className="list-img" />
//       </button>
//     </li>
//   )
// }

const ImageList = props => {
  const {listOfImageDetails, onChangeScore} = props
  const {thumbnailUrl, id} = listOfImageDetails
  const onClickthumbnailBtn = () => {
    onChangeScore(id)
  }
  return (
    <li>
      <button
        className="button-url"
        onClick={onClickthumbnailBtn}
        type="button"
      >
        <img src={thumbnailUrl} className="list-img" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageList
