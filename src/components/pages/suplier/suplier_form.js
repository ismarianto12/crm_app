import axios from 'axios';
import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router-dom";
import API_URL from '../../../utils/env.js';
import Header from '../../templates/templates';



const Propsdata = (par) => {
    const token = localStorage.getItem("token");
    return {
        method: 'get',
        url: par,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    };
}

export default function Suplierform() {

    let { id } = useParams();

    const history = useHistory();
    let location = useLocation();

    const [values, setValues] = useState({
        kode: '',
        nama: '',
        status: '',
        alamat: '',
        npwp: '',
        status_aktif: '',
        suplier_id: '',
        user_id: '',
    });

    const [title, setTitle] = useState(null);
    const [fdata, setFdata] = useState([]);
    const [suplier, setsuplier] = useState([]);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        const token = localStorage.getItem("token");
        let cf = Propsdata(API_URL() + '/suplier/list');
        axios(cf)
            .then(function (response) {
                let a = response.data;
                console.log(a);
                setFdata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        // suplier 
        let suplier = Propsdata(API_URL() + '/suplier/list');
        axios(suplier)
            .then(function (response) {
                let a = response.data;
                console.log(a);
                setsuplier(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        if (id !== '') {
            var config = {
                method: 'get',
                url: API_URL() + `suplier/show/${id}`,
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
                        kode: a.kode,
                        nama: a.nama,
                        status: a.status,
                        alamat: a.alamat,
                        npwp: a.npwp,
                        status_aktif: a.status_aktif,
                        suplier_id: a.suplier_id,
                        user_id: a.user_id,
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        setTitle('Tambah data ');

    }, []);


    const onSubmit = data => {
        const token = localStorage.getItem("token");
        var datany = {
            "kode": data.kode,
            "nama": data.nama,
            "status": data.status,
            "alamat": data.alamat,
            "npwp": data.npwp,
            "status_aktif": data.status_aktif,
            "suplier_id": (data.suplier_id) ? data.suplier_id : '1',
            "user_id": (data.user_id) ? data.user_id : 1
        };
        if (!id) {

            var config = {
                method: 'put',
                url: API_URL() + 'suplier/add',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: datany
            };

            axios(config)
                .then(function (response) {
                    console.log(response);
                    let { from } = location.state || { from: { pathname: "/suplier" } };
                    history.replace(from);
                })
                .catch(function (error, jqXHr) {
                    console.log(jqXHr);
                });
        } else {

            var config = {
                method: 'patch',
                url: API_URL() + `suplier/update/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: datany
            };

            axios(config)
                .then(function (response) {
                    console.log(response);
                    let { from } = location.state || { from: { pathname: "/suplier" } };
                    history.replace(from);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
    // console.log(kode);
    return (
        <Header title={'Masater data suplier'} container={
            <>
                <div className="page-inner">

                    <div className="row">
                        <div className="page-header">
                            <h4 className="page-title">Barang {id}.</h4>
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
                                    <h4 className="card-title">{title}  </h4>
                                </div>
                                <div className="card-body">

                                    <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                                        <input type="hidden" name="user_id" value="1" />
                                        <div className="form-group row">
                                            <lable className="col-md-2">Kode</lable>
                                            <div className="col-md-4">
                                                <input name="kode" className="form-control" placeholder="Kode Suplier .." defaultValue={values.kode} {...register("kode", { required: true })} />
                                                {errors.kode && <span>This field is required</span>}<br />
                                            </div>
                                            <lable className="col-md-2">Nama Suplier</lable>
                                            <div className="col-md-4">
                                                <input className="form-control" placeholder="Nama Barang .." defaultValue={values.nama} {...register("nama", { required: true })} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <lable className="col-md-2">Alamat</lable>
                                            <div className="col-md-4">
                                                <textarea defaultValue={values.alamat} className="form-control" name="alamat"  {...register("alamat", { required: true })}></textarea>
                                            </div>
                                            <lable className="col-md-2">Npwp</lable>
                                            <div className="col-md-4">
                                                <input className="form-control" defaultValue={values.npwp} placeholder="Nama Barang .." defaultValue={values.fkode} {...register("npwp", { required: true })} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <lable className="col-md-2">Status</lable>
                                            <div className="col-md-4">
                                                <select className="form-control" {...register('status_aktif', { required: true })}>
                                                    <option value="1">Aktif</option>
                                                    <option value="2">NonAktif</option>
                                                </select>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="col-md-4">
                                            <button className="btn btn-primary"><i class="fa fa-save"></i> Simpan</button>
                                            &nbsp; &nbsp;
                                            <button className="btn btn-danger"><i class="fas fa-reset"></i>Reset</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        } />
    );

}
