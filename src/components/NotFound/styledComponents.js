import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NotFoundVideosHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => props.headingColor};
`

export const NotFoundVideosNote = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => props.noteColor};
`
