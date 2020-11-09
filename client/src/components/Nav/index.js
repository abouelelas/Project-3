import React, {useState, Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import './style.css';

function Nav() {
  const [loginExpanded, setLoginExpanded] = useState(false);
  const {email, loggedIn} = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
       Vocabulary-Bee
      </a>
      {/* { (() => {
        if(loggedIn){
          return <p className="logged-in-text">Logged in as {email} <Link to="/logout" onClick={ () => setLoginExpanded(false)}>Logout</Link> </p>;
        }
        else{
          if(!loginExpanded){
            return <button onClick={ () => setLoginExpanded(true) }>Login</button>;
          }
          else{
            return (
              <Fragment>
                <LoginForm className="top-menu-login"/>
                <button onClick={ () => setLoginExpanded(false) }>X</button>
              </Fragment>
            )
          } 
        }
      })()} */}
      {(!loggedIn) ? <Link to="/login" >Login</Link> : <Link to="/logout" >Logout</Link> }
      <Link to="/card" >Flashcard</Link>
      <Link to="/translate" >Translate</Link>
      <Link to="/quiz" >Quiz</Link>
      <Link to="/card" >About Us</Link>
    </nav>
  );
}

export default Nav;
