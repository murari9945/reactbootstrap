import { useState, useRef, useContext,useEffect } from 'react';
import { AuthContext } from './AuthContext';
//import { useHistory } from 'react-router-dom';
import classes from './Login.module.css';
import {useNavigate} from 'react-router-dom';


const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  
  const authContext = useContext(AuthContext);
 // const newPasswordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
 
  const submitHandler = (event) => {
    event.preventDefault();
    const givenEmail = emailRef.current.value;
    const givenPassword = passwordRef.current.value;
   // const newPassword = newPasswordRef.current.value;

    setisLoading(true);

    if (isLogin) {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQRrgkT4fxs2lThvvASjY6veknXkZZtn0', {
        method: 'POST',
        body: JSON.stringify({
          email: givenEmail,
          password: givenPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          setisLoading(false);
          if (res.ok) {
            return res.json().then((data) => {
              const idToken = data.idToken;
              console.log(idToken);
              authContext.login(idToken);
              navigate('/products');
            });
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication failed';
              alert(errorMessage);
              console.log(data);
            });
          }
        })
        .catch((error) => {
          setisLoading(false);
          console.log('Error:', error);
        });
    } 

   
       
  };
 

  return (
    <section className={classes.auth}>
      <h1>{ 'Login'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'login' : 'create account'}</button>}
          {isLoading && <p style={{ color: 'white' }}>sending request</p>}

        
        </div>
      </form>
    
    </section>
  );
};

export default LoginForm;
