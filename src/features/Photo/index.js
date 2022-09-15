import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEditPage from "./pages/AddEditPage";
import MainPage from "./pages/MainPage";
import 'bootstrap/dist/css/bootstrap.css';

Photo.propTypes = {};

function Photo(props) {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={url} component={MainPage} />

      <Route path={`${url}/add`} component={AddEditPage} />
      <Route path={`${url}/:photoId`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;
