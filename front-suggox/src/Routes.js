import React from "react";
// BrowserRouter is a component. It will make the props availale to other nested components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddSurvey from "./admin/CreateSurvey";
import SurveyList from "./user/SurveyList";
import SurveyAnswer from "./user/SurveyAnswer";

const Routes = () => {
    return (
        // BrowserRouter will make the props available in all components inside of Switch
        <BrowserRouter>
            {/* Inside Switch we will have all the routes */}
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/surveylist" exact component={SurveyList} /> */}
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                {/* PrivateRoute will protect route only for the logged in users */}
                <PrivateRoute 
                    path='/user/dashboard' 
                    exact 
                    component={Dashboard} 
                />
                {/* PrivateRoute will protect route only for the admin logged in users */}
                <AdminRoute 
                    path='/admin/dashboard' 
                    exact 
                    component={AdminDashboard} 
                />
                <AdminRoute 
                    path='/create_survey' 
                    exact 
                    component={AddSurvey} 
                />
                <Route 
                    path='/survey_list' 
                    exact 
                    component={SurveyList} 
                />
                <Route 
                    path='/answer_survey/:id' 
                    exact 
                    component={SurveyAnswer} 
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
