import React, { Component, useContext, createContext, setState, useState } from "react";
import API_URL from '../../utils/env.js';
import axios from 'axios';
import {
    useHistory,
    useLocation
} from "react-router-dom";



export default function Login() {
    let history = useHistory();
    let location = useLocation();
    let notif = '';

    const fakeAuth = {
        isAuthenticated: false,
        signin(cb) {
            fakeAuth.isAuthenticated = true;
            setTimeout(cb, 100); // fake async
        },
        signout(cb) {
            fakeAuth.isAuthenticated = false;
            setTimeout(cb, 100);
        }
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    const [gt, setGt] = useState(null);
    const [user, setUser] = useState(null);

    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const Husername = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            username: event.target.value,
        }));
    };
    const Hpassword = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };
    const LoginAction = (e) => {
        e.preventDefault();
        if (values.password === '' || values.username === '') {
            console.log('username dan password tidak boleh kosong');
        } else {

            var ggusername = values.username;
            var ggpassword = values.password;

            let api = API_URL() + 'api/login';

            var data = JSON.stringify({
                "username": ggusername,
                "password": ggpassword
            });
            var config = {
                method: 'post',
                url: api,
                headers: {
                    'Content-Type': 'application/json'
                },
            };

            axios.post(api, {
                "username": ggusername,
                "password": ggpassword
            })
                .then(function (response) {
                    if (response.status == 200) {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('username', ggusername);
                        let { from } = location.state || { from: { pathname: "/dashboard" } };
                        history.replace(from);
                        setUser("user");


                    } else if (response.status != 200) {
                        let ssnotif = 'username dan password salah'
                        setValues((values) => ({
                            ...values,
                            notif: ssnotif,
                        }));
                        // gt = ssnotif;
                        setGt('username salah woy');
                    }
                })
                .catch(function (error) {
                    setGt('username salah woy');
                });
        }
        console.log('apaaan' + gt);

    }

    return (<>
        <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link crossorigin href="https://getbootstrap.com/docs/4.0/examples/sign-in/signin.css" rel="stylesheet" />

        <div className="container text-center">

            <form className="form-signin" onSubmit={LoginAction} >
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="text" id="inputEmail" name="username" className="form-control" placeholder="Email address" onChange={Husername} value={values.username} />
                {LoginAction && values.username && <span id='email-error'>Please enter an email address</span>}

                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" onChange={Hpassword} value={values.password} />
                {LoginAction && values.password && <span id='email-error'>Please password </span>}

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button typeof="submit" className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
            {gt}
        </div>
    </>
    );


}