import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {
    videoDetails,
    isLiked,
    isDisliked,
    onClickLikedButton,
    onClickDislikedButton,
  } = props

  const {
    id,
    videoUrl,
    title,
    viewCount,
    publishedAt,
    profileImageUrl,
    name,
    subscriberCount,
    description,
  } = videoDetails

  const onClickLike = () => {
    onClickLikedButton()
  }
  const onClickDislike = () => {
    onClickDislikedButton()
  }

  const formattedDate = () => {
    const newDate = formatDistanceToNow(new Date(publishedAt))
    const formatDate = newDate.split(' ')
    const publishedDate = `${formatDate[1]} ${formatDate[2]}`
    return publishedDate
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos, addVideo} = value

        const color = isDarkTheme ? '#ffffff' : '#64748b'

        let isSaved
        const index = savedVideos.findIndex(each => each.id === id)
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveIconColor = isSaved ? '#2563eb' : color

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoUrl} controls width="100%" />
            <PlayVideoTitle color={color}>{title}</PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={color}>
                {viewCount} views <PlayVideoDot> &#8226; </PlayVideoDot>
                {formattedDate()} ago
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText color={isLiked ? '#2563eb' : '#64748b'}>
                      Like
                    </ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isDisliked ? '#2563eb' : '#64748b'}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText color={isDisliked ? '#2563eb' : '#64748b'}>
                      Dislike
                    </ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText color={color}>
                      {isSaved ? 'Saved' : 'Save'}
                    </ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <ChannelInfo>
                <ChannelName color={color}>{name}</ChannelName>
                <ChannelSubscribers color={color}>
                  {subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription color={color}>
                  {description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView
