import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingListItem = styled.li`
  background: none;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const GamingThumbNailImage = styled.img`
  width: 150px;
  height: 300px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingTitle = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-bottom: 0;
`

export const GamingViewsAndDate = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
