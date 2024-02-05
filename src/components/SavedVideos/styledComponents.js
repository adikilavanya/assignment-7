import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`

export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
  background-color${props => props.bgColor};
`
export const SavedTitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const SavedText = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`
export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => props.headingColor};
`
export const NoSavedVideosNote = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => props.noteColor};
`
