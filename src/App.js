import { BrowserRouter as Router, Redirect, Switch, Route, useLocation } from "react-router-dom";
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import Home from './components/home/views/Home';
import React, { useEffect } from 'react'
import { myNewTheme } from './components/theme';
import NavbarDesktop from "./components/navbar/NavbarDesktop";
import NavbarMobile from "./components/navbar/NavbarMobile";
function App() {
  const [isLargerThan980] = useMediaQuery('(min-width: 980px)')
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')

 // const history = useLocation();

  // useEffect(() => {
  //   if (history.location.pathname == '/') {
  //     history.push('/home');
  //   }
  // }, []);
  return (
    <ChakraProvider theme={myNewTheme} resetCSS={true}>

      <Router className="App">
        <NavbarDesktop />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/category/:category"} />
          <Route exact path={"/item/:id"} />
          <Route exact path={"/carrito"} />
          <Route path={"*"} />
        </Switch>
        <NavbarMobile />
      </Router>
    </ChakraProvider>
  );
}

export default App;
