/* eslint-disable react/jsx-no-comment-textnodes */
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/Login"));
const notfound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <div className="w-full h-screen">
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            //New Pages //End New Pages
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={notfound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
