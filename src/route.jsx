import React from "react";
import {BrowserRouter, Switch, Route, Link
} from "react-router-dom";
import Editpage from "./pages/Editpage";
import Homepage from "./pages/Homepage";
import Registerpage from "./pages/Registerpage";
import FormRegister from './components/Form/FormRegister'

export default function Routes() {
  return (
    <BrowserRouter>

        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/register" component={FormRegister}/>

          <Route path="/editpage" component={Editpage}/>

          {/* <Route>404 Not Found</Route> */}

        </Switch>
    </BrowserRouter>
  );
}