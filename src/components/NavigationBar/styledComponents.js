import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.div`
  display: flex;
`

export const NavigationLargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  top: 60px;
  height: 95%;
  position: fixed;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 12px;
  color: ${props => props.color};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`

export const ContactImage = styled.img`
  height: 26px;
  width: 26px;
  margin-right: 10px;
  border-radius: 13px;
`

export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`

export const NavigationSmallContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
