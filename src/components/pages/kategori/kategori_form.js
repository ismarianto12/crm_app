import { React, setState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, Link, useLocation, useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import API_URL from '../../../utils/env.js';
import DataTable from 'react-data-table-component';
import Header from '../../templates/templates';


export default function Kategoriform() {

    let { id } = useParams();

    // const [datanya, setDatanya] = setState();

    const history = useHistory();
    let location = useLocation();

    const [values, setValues] = useState({

        fkode: '',
        fnama: '',
    });

    const [title, setTitle] = useState(null);

    const token = localStorage.getItem("token");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        if (id !== '') {
            var config = {
                method: 'get',
                url: API_URL() + `kategori/show/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            };

            axios(config)
                .then(function (response) {
                    let a = response.data;
                    console.log(a);
                    setTitle('Edit data ');
                    setValues({
                        fkode: a.kode,
                        fnama: a.nama,
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        setTitle('Tambah data ');

    }, []);


    const onSubmit = data => {
        if (!id) {
            var datany = {
                "kode": data.kode,
                "nama": data.nama
            };
            var config = {
                method: 'put',
                url: API_URL() + 'kategori/add',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: datany
            };

            axios(config)
                .then(function (response) {
                    console.log(response);
                    let { from } = location.state || { from: { pathname: "/kategori" } };
                    history.replace(from);
                })
                .catch(function (error,jqXHr) {
                    console.log(jqXHr);
                });
        } else {
            var datany = {
                "kode": data.kode,
                "nama": data.nama
            };
            var config = {
                method: 'put',
                url: API_URL() + 'kategori/update',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: datany
            };

            axios(config)
                .then(function (response) {
                    console.log(response);
                    let { from } = location.state || { from: { pathname: "/kategori" } };
                    history.replace(from);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    };
    // console.log(kode);
    return (
        <Header title={'Ketegori Barang'} container={
            <>
                <div className="page-inner">

                    <div className="row">
                        <div className="page-header">
                            <h4 className="page-title">Kategori Barang {id}.</h4>
                            <ul className="breadcrumbs">
                                <li className="nav-home">
                                    <a href="#">
                                        <i className="flaticon-home"></i>
                                    </a>
                                </li>
                                <li className="separator">
                                    <i className="flaticon-right-arrow"></i>
                                </li>
                                <li className="nav-item">
                                    <a href="#">Tables</a>
                                </li>
                                <li className="separator">
                                    <i className="flaticon-right-arrow"></i>
                                </li>
                                <li className="nav-item">
                                    <a href="#">Datatables</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">{title} kategori </h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <label>Kode Kategory</label>
                                            <input className="form-control" placeholder="Kategori Barang .." defaultValue={values.fkode} {...register("kode", { required: true })} />
                                            {errors.kode && <span>This field is required</span>}<br />
                                            <label>Nama Kategory</label>
                                            <input className="form-control" placeholder="Nama Barang .." defaultValue={values.fkode} {...register("nama", { required: true })} />
                                            {errors.kode && <span>This field is required</span>}<br />

                                            <input type="submit" className="btn btn-primary btn-sm" value="Simpan Data" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        } />
    );

}

const data = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
}
