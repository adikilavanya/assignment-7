import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import PlayVideoView from '../PlayVideoView'
import FailedView from '../FailedView'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {VideoDetailViewContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}
class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLikedButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislikedButton = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisliked={isDisliked}
        onClickLikedButton={this.onClickLikedButton}
        onClickDislikedButton={this.onClickDislikedButton}
      />
    )
  }

  renderFailureView = () => <FailedView onRetry={this.onRetry} />

  renderVideoDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPlayVideoView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailViewContainer
                bgColor={bgColor}
                data-testid="videoItemDetails"
              >
                {this.renderVideoDetailsView()}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
