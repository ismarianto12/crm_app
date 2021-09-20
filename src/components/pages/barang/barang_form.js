import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useHistory, useParams } from "react-router-dom";
import axios from 'axios';
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

export default function Barangform() {

    let { id } = useParams();

    const history = useHistory();
    let location = useLocation();

    const [values, setValues] = useState({

        fkode: '',
        fnama: '',
    });

    const [title, setTitle] = useState(null);
    const [fdata, setFdata] = useState([]);
    const [suplier, setsuplier] = useState([]);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(() => {
        const token = localStorage.getItem("token");
        let cf = Propsdata(API_URL() + '/kategori/list');
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
                url: API_URL() + `barang/show/${id}`,
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
        const token = localStorage.getItem("token");
        var datany = {
            "harga_beli": data.harga_beli,
            "harga_jual": data.harga_jual,
            "kategori_id": data.kategori_id,
            "kode": data.kode,
            "nama": data.nama,
            "stok": data.stok,
            "suplier_id": (data.suplier_id) ? data.suplier_id : '1',
            "user_id": (data.user_id) ? data.user_id : 1
        };
        if (!id) {

            var config = {
                method: 'PUT',
                url: API_URL() + 'barang/add',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: datany
            };

            axios(config)
                .then(function (response) {
                    console.log(response);
                    let { from } = location.state || { from: { pathname: "/barang" } };
                    history.replace(from);
                })
                .catch(function (error, jqXHr) {
                    console.log(jqXHr);
                });
        } else {

            const config = {
                method: 'put',
                url: API_URL() + 'barang/update',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: datany
            };

            axios(config)
                .then(function (response) {
                    console.log(response);
                    let { from } = location.state || { from: { pathname: "/barang" } };
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
                                    <h4 className="card-title">{title} Barang </h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                                            <input type="hidden" name="user_id" value="1" />
                                            <div className="form-group row">
                                                <lable className="col-md-2">Kode barang</lable>
                                                <div className="col-md-4">
                                                    <input className="form-control" placeholder="Kode Barang .." defaultValue={values.fkode} {...register("kode", { required: true })} />
                                                    {errors.kode && <span>This field is required</span>}<br />
                                                </div>
                                                <lable className="col-md-2">Nama barang</lable>
                                                <div className="col-md-4">
                                                    <input className="form-control" placeholder="Nama Barang .." defaultValue={values.fkode} {...register("nama", { required: true })} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <lable className="col-md-2">Harga Jual </lable>
                                                <div className="col-md-4">
                                                    <input className="form-control" placeholder="Harga Jual.." defaultValue={values.fkode} {...register("harga_jual", { required: true })} />
                                                </div>
                                                <lable className="col-md-2">Harga Beli </lable>
                                                <div className="col-md-4">
                                                    <input className="form-control" placeholder="Harga Beli .." defaultValue={values.fkode} {...register("harga_beli", { required: true })} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <lable className="col-md-2">Stok</lable>
                                                <div className="col-md-4">
                                                    <input className="form-control" placeholder="Kode Barang .." defaultValue={values.fkode} {...register("stok", { required: true })} />
                                                </div>
                                                <lable className="col-md-2">Jumlah </lable>
                                                <div className="col-md-4">
                                                    <input className="form-control" type="number" placeholder="Nama Barang .." defaultValue={values.fkode} {...register("jumlah", { required: true })} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <lable className="col-md-2">Kategory barang</lable>
                                                <div className="col-md-4">
                                                    <select className="form-control" {...register("kategori_id", { required: true })}>
                                                        <option value="">Pilih Kategori Barang</option>
                                                        {fdata.map((obj, index) => {
                                                            return (
                                                                <option value={obj.id}>{obj.nama}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <lable className="col-md-2">Suplier barang</lable>
                                                <div className="col-md-4">
                                                    <select className="form-control" {...register("suplier_id", { required: false })}>
                                                        {suplier.map((obj, index) => {
                                                            return (
                                                                <option value={obj.id}>{obj.nama}</option>
                                                            )
                                                        })}
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
                </div>
            </>
        } />
    );

}
