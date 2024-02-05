import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HomeVideoCard from '../HomeVideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  HomeContainer,
  BannerContainer,
  BannerLeftPart,
  BannerImage,
  BannerRightPart,
  BannerButton,
  BannerText,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
  VideoCardList,
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  NoVideosRetryButton,
} from './styledComponents'

import FailedView from '../FailedView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    homeVideos: [],
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        homeVideos: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchVideos = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {homeVideos} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

          return homeVideos.length > 0 ? (
            <VideoCardList>
              {homeVideos.map(each => (
                <HomeVideoCard videoDetails={each} key={each.id} />
              ))}
            </VideoCardList>
          ) : (
            <NoVideosView>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoVideosHeading headingColor={headingColor}>
                No Search results found
              </NoVideosHeading>
              <NoVideosNote noteColor={noteColor}>
                Try different key words or remove search filter
              </NoVideosNote>
              <NoVideosRetryButton type="button" onClick={this.onRetry}>
                Retry
              </NoVideosRetryButton>
            </NoVideosView>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  renderFailureView = () => <FailedView onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />

              <NavigationBar />
              <HomeContainer bgColor={bgColor} data-testid="home">
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeftPart>
                    <BannerImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerText>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseButton
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <AiOutlineClose size={25} />
                    </BannerCloseButton>
                  </BannerRightPart>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    onChange={this.onChangeInput}
                    value={searchInput}
                    placeholder="Search"
                    color={textColor}
                  />
                  <SearchIconContainer
                    type="button"
                    data-testid="searchButton"
                    onClick={this.getSearchVideos}
                  >
                    <AiOutlineSearch size={25} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
