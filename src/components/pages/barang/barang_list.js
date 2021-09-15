import axios from 'axios';
import React from "react";
import ReactDOM from "react-dom";
import API_URL from '../../../utils/env.js';
import DataTable from 'react-data-table-component';
import Header from '../../templates/templates';
import { Link } from 'react-router-dom';


class ListBarang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            ket: []
        };
    }

    // handle onclick function
    Editdata = (id) => {
        let { from } = this.props.location.state || { from: { pathname: `/barang/edit/${id}` } };
        this.props.history.replace(from);
    }

    Hapusdata = (id) => {
        console.log(id);
        const token = localStorage.getItem("token");
        var config = {
            method: 'DELETE',
            url: API_URL() + `barang/delete/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: { "id": id }
        };
        axios(config).then((response) => {
            this.Refreshdata();
            console.log(response);
            this.setState({ ket: 'data berhasil di hapus' })

        }).catch((err) => {
            console.log(err);
        });
    }

    Refreshdata = () => {
        const token = localStorage.getItem("token");// JSON.parse(localStorage.getItem('token'));
        let api = API_URL() + 'barang/list';
        fetch(api, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => res.json())
            .then(
                result => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            );

    }
    componentDidMount() {
        this.Refreshdata();
    }

    render() {
        const ExpandedComponent = ({ data }) => {
            <>
                <Link to="barang/edit/${row.id}" className="btn btn-primary">Edit </Link>
                <Link to="barang/delete/${row.id}" className="btn btn-danger">Delete</Link>
            </>
        };

        const columns = [
            {
                name: 'Kode Barang',
                selector: row => row.nama,
            },
            {
                name: 'Nama Barang',
                selector: row => row.kode,
            },
            {
                name: 'Stok',
                selector: row => row.stok,
            },
            {
                name: 'Harga Jual',
                selector: row => row.harga_jual,
            },
            {
                name: 'Harga Beli',
                selector: row => row.harga_jual,
            },
            {
                name: 'Action',
                button: true,
                Width: '200',
                cell: row => (
                    <>
                        <button className="btn btn-primary btn-sm" onClick={() => { this.Editdata(row.id) }}><i className="fa fa-pencil"></i></button>
                        <button className="btn btn-danger btn-sm" onClick={() => { this.Hapusdata(row.id) }}><i className="fa fa-trash"></i></button>
                    </>
                ),
            },
        ];
        const { error, isLoaded, items } = this.state;
        const data = this.state.items;


        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            console.log(this.state.items);


            return (
                <Header title={'Dashboard'} container={
                    <>
                        <div className="page-inner">

                            <div className="row">
                                <div className="page-header">
                                    <h4 className="page-title">Data Master Barang</h4>
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
                                            <h4 className="card-title">Data Master Barang</h4>
                                        </div>
                                        <div className="card-body">
                                            {this.state.ket}
                                            <div className="table-responsive">
                                                <Link to="barang/add" class="btn btn-secondary">Tambah barang</Link>
                                                <DataTable
                                                    columns={columns}
                                                    data={data}
                                                    pagination
                                                    expandableRows
                                                    expandableRowsComponent={ExpandedComponent}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                />
            );
        }
    }
}


export default ListBarang;