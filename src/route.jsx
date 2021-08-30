import { render } from "@testing-library/react";
import React from "react";
import {BrowserRouter, Switch, Route, Link
} from "react-router-dom";
import Editpage from "./pages/Editpage";
import Homepage from "./pages/Homepage";
import Registerpage from "./pages/Registerpage";

export default function Routes({props}) {

    return (

      <BrowserRouter>
  
          <Switch>
  
            <Route exact path="/">
              <Homepage />
            </Route>
  
            {/* queria mandar pra register page, passando a const com props. Mas n funciona!! */}
{/*             <Route path="/register" render={({props})=> <Registerpage {...props}/>}/>
 */}  

            <Route path="/register" render={(props) => <Register  {...props} /> } exact />

            <Route path="/editpage" component={Editpage}/>
  
            {/* <Route>404 Not Found</Route> */}
  
          </Switch>
      </BrowserRouter>
    );
  }
  