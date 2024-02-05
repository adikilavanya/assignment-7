import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 260px;
    margin-bottom: 0px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`
export const BannerButton = styled.button`
  padding: 5px 10px 5px 10px;
  border: 1px solid #000000;
  color: #000000;
  background: none;
`
export const BannerText = styled.p`
  font-size: 15px;
  color: #000000;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 26px;
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 5px;
  margin: 20px;
  width: 60%;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  background: none;
  outline: none;
  width: 100%;
  padding: 6px;
  border: none;
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768pxx) {
    margin-left: 20px;
  }
`

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoVideosImage = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoVideosHeading = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  color: ${props => props.headingColor};
`
export const NoVideosNote = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.noteColor};
`

export const NoVideosRetryButton = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  padding: 5px 10px 5px 10px;
  font-size: 16px;
  font-family: 'Roboto';
`
