import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const OptionLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  background: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 18px;
  }
`
export const ThumbNailImage = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  padding-left: 4px;
  padding-right: 4px;
`
