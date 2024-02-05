import {formatDistanceToNow} from 'date-fns'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    viewCount,
    publishedAt,
    profileImageUrl,
    name,
    thumbnailUrl,
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
        const textColor = isDarkTheme ? '#2563eb' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`}>
            <TrendingListItem>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingChannelName color={textColor}>
                    {name}
                  </TrendingChannelName>
                  <TrendingViewsAndDate color={textColor}>
                    {viewCount} views<TrendingDot> &#64748b; </TrendingDot>
                    {formattedDate()} ago
                  </TrendingViewsAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
