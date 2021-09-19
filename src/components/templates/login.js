import React, { Component, useContext, createContext, setState, useState } from "react";
import API_URL from '../../utils/env.js';
// import 'bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

// import parse from 'html-react-parser'
import Parser from 'html-react-parser/dist/html-react-parser'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    useHistory,
    useLocation
} from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authenticated } from '../../store/index';



export default function Login() {
    let history = useHistory();
    let location = useLocation();
    const setAuth = useSetRecoilState(authenticated);

    const [gt, setGt] = useState('');

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
            setGt('<div class="alert alert-danger">Username dan password wajib di isi</div>');
        } else {
            setGt('<div class="alert alert-info">Proses Login ....</div>');
            var ggusername = values.username;
            var ggpassword = values.password;

            const userdata = {
                username: values.username,
                password: values.username
            }

            let api = API_URL() + 'api/login';

            var data = JSON.stringify({
                "username": ggusername,
                "password": ggpassword
            });


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
                        setAuth(userdata);
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

        <div className="container-fluid" style={{
            background: "url('https://accuratebusinesscenter.com/wp-content/uploads/2020/02/Gambar-Laporan-keuangan-perusahaan.jpg')"
        }}>
            <div className="row no-gutter">
                {/* The image half */}
                <div className="col-md-6 d-none d-md-flex bg-image" />
                {/* The content half */}
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                        {/* Demo content*/}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <b>Customer relationship management</b>
                                    <p className="text-muted mb-4">Please Login Access App.</p>
                                    <form onSubmit={LoginAction}>
                                        <div className="form-group mb-3">
                                            <input id="username" type="text" onChange={Husername} placeholder="Username" required autofocus className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword" type="password" onChange={Hpassword} placeholder="Password" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" defaultChecked className="custom-control-input" />
                                            <label htmlFor="customCheck1" className="custom-control-label">Remember password</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                        <div className="text-center d-flex justify-content-between mt-4"><p>Developed  by <a href="https://ismarianto12.github.io/" className="font-italic text-muted">
                                            <u>Ismaraianto</u></a></p></div>
                                    </form>

                                    {Parser(gt)}



                                </div>
                            </div>
                        </div>{/* End */}
                    </div>
                </div>{/* End */}
            </div>
        </div>

    </>
    );


}