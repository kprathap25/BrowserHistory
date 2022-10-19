import './index.css'

const ImageManager = props => {
  const {listOfThumbnail, isTabClicked, onChangeTabStyle} = props
  const {displayText, tabId} = listOfThumbnail

  const onChangeTab = () => {
    onChangeTabStyle(tabId)
  }

  const isActiveTab = isTabClicked ? 'btn-under-line' : ''

  return (
    <li className="li-list">
      <button
        onClick={onChangeTab}
        className={`btn ${isActiveTab}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default ImageManager
