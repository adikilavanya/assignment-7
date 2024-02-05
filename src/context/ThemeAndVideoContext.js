import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: '',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
