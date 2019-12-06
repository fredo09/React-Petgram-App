import React from 'react'
import ListCategories from './Compnents/ListOfCategory'
import { ListOfPhotoCard } from './Compnents/ListOfPhotoCard';
import { LoaderBox } from './Compnents/Loader';
import Logo from './Compnents/Logo'

import { GlobalStyle } from './styles/GlobalStyles'

class App extends React.Component {
  render () {
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <ListCategories />
            <br/>
            <hr></hr>
            <ListOfPhotoCard />
        </div>
    )
  }
}

export default App
