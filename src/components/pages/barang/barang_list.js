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
            items: []
        };
    }
    componentDidMount() {
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
                        <Link to={row.id} className="btn btn-primary btn-sm"><i className="fa fa-pencil"></i></Link>
                        <Link to={row.id} className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></Link>
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