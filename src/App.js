import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Login from './pages/Login'
import Game from './pages/Game'
// import EditDeck from './pages/EditDeck'

function App () {
  return (
    <div className='app'>
      <Switch>
         <Route exact path='/kof' component={Login} ></Route>
         <Route exact path='/game' component={Game} ></Route>
         {/* <Route exact path='/edit' component={EditDeck} ></Route> */}
        <Redirect to='/kof' />
       </Switch>
    </div>
  )
}

export default App
