import {formatDistanceToNow} from 'date-fns'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  OptionLink,
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  const formattedDate = () => {
    const newDate = formatDistanceToNow(new Date(publishedAt))
    const formatDate = newDate.split(' ')
    const publishedDate = `${formatDate[1]} ${formatDate[2]}`
    return publishedDate
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <OptionLink to={`/videos/${id}`}>
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views<Dot> &#8226; </Dot> {formattedDate()} ago
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </OptionLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
