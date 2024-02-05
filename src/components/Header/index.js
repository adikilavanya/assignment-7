import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  NavbarHeader,
  LogoLink,
  HeaderLogo,
  IconsContainer,
  ThemeButton,
  ProfileImage,
  HamburgerMenu,
  LogoutButton,
  ModalContainer,
  ModalText,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  LogoutIconButton,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo src={imageUrl} alt="website logo" />
          </LogoLink>
          <IconsContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <HamburgerMenu type="button" data-testid="theme">
              <GiHamburgerMenu size={25} color={color} />
            </HamburgerMenu>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalText>Are you sure, you want to logout</ModalText>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                  <ModalText>Are you sure, you want to logout</ModalText>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </IconsContainer>
        </NavbarHeader>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
