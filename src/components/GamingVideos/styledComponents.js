import styled from 'styled-components'

export const GamingContainer = styled.div`
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

export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const GamingTitleIconContainer = styled.div`
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
export const GamingText = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 80vw;
    margin-left: 40px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
