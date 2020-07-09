import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//---BootStrap------------
import "bootstrap/dist/css/bootstrap.min.css";
//-----------------------
import "./App.css";
//---Components-----
import AuthService from "./services/auth-service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Shop from "./components/Shop";
import ArmFirst from "./components/armFifth";
import armSecond from "./components/armSecond.js";
import armThird from "./components/armThird.js";
import armFourth from "./components/armFourth.js";
import armFifth from "./components/armSpectrum";
import armSixth from "./components/armFifth";
import UpdateUser from "./components/UpdateUser";
import Cart from "./components/Cart";
import PartsList from "./components/childComponents/PartsList";
import EditEmployee from "./components/childComponents/Edit.Employee";
import SignupEmployee from "./components/childComponents/SignupEmployee";
//---------------------------------------------------------------------
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      id: "",
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        id: JSON.parse(localStorage.getItem("user")),
      });
    }
  }

  logOut() {
    localStorage.clear();
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    const { id } = this.state;
    // Reterive Username from LocalStorage
    const users = id.id;
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-primary">
            <Link to={"/"} className="navbar-brand">
              Curebionics
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/shop"} className="nav-link">
                  Shop
                </Link>
              </li>

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
          <Switch>
            <div className="containermt-3">
              <Route path="/Shop" exact component={Shop} />
              <Route path="/Shop/ironman" exact component={ArmFirst} />
              <Route path="/shop/batman" exact component={armSecond} />
              <Route path="/shop/superman" exact component={armThird} />
              <Route path="/shop/lol" exact component={armFourth} />
              <Route path="/shop/spectrum" exact component={armFifth} />
              <Route path="/shop/fullycustomized" exact component={armSixth} />
            </div>
          </Switch>
          <Switch>
            <div className="container mt-3">
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path={"/users/" + users} component={UpdateUser} />
              <Route exact path={"/covers"} component={PartsList} />
              <Route exact path={"/edit"} component={EditEmployee} />

              <Route
                exact
                path={"/signupemployee"}
                component={SignupEmployee}
              />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
