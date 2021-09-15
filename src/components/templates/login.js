import React, { Component, useContext, createContext, setState, useState } from "react";
import API_URL from '../../utils/env.js';
import 'bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
// import parse from 'html-react-parser'
import Parser from 'html-react-parser/dist/html-react-parser'

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

    const [gt, setGt] = useState('');
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
                        setGt('<div class="alert alert-danger">Maaf username dan password yang anda masukan tidak sesuai.</div>');
                    }
                })
                .catch(function (error) {
                    setGt('<div class="alert alert-danger">Maaf username dan password yang anda masukan tidak sesuai.</div>');
                });
        }
        console.log('apaaan' + gt);

    }

    return (<>
        <link crossorigin href="https://getbootstrap.com/docs/4.0/examples/sign-in/signin.css" rel="stylesheet" />

        <div className="container text-center">

            <h2><i className="fa fa-cubes"></i></h2>

            <form className="form-horizontal" onSubmit={LoginAction} >
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <div class="form-group row">
                    <label for="inputEmail" className="sr-only">Username</label>
                    <input type="text" id="inputEmail" name="username" className="form-control" placeholder="Email address" onChange={Husername} value={values.username} />
                </div>
                <div class="form-group row">
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" onChange={Hpassword} value={values.password} />
                </div>

                <button typeof="submit" className="btn btn-lg btn-primary btn-block" type="submit"><i className="fa fa-user"></i>Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
            {Parser(gt)}
        </div>
    </>
    );


}