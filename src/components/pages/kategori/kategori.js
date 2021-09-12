import axios from 'axios';
import React from "react";
import ReactDOM from "react-dom";
import API_URL from '../../../utils/env.js';
import DataTable from 'react-data-table-component';
import Header from '../../templates/templates';
import { Link, useLocation, useHistory } from 'react-router-dom';

const History = () => {
    const history = useHistory();
    let location = useLocation();
}

class Kategori extends React.Component {
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
        let api = API_URL() + 'kategori/list';
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

    // handle onclick function
    Editdata = (id) => {
        let { from } = this.props.location.state || { from: { pathname: `/kategori/edit/${id}` } };
        this.props.history.replace(from);
    }

    Hapusdata = (id) => {
        const token = localStorage.getItem("token");
        var config = {
            method: 'DELETE',
            url: API_URL() + `kategori/delete/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: { "id": id }
        };

        axios(config)
            .then(function (response) {
                let a = response.data;
                console.log(a);
                console.log(response);
                let { from } = this.location.state || { from: { pathname: "/kategori" } };
                this.history.replace(from);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const ExpandedComponent = ({ data }) => {

        };

        const columns = [
            {
                name: 'id',
                // StyleSheet : /
                selector: row => row.id,
            },
            {
                name: 'Kode',
                // StyleSheet : /
                selector: row => row.nama,
            },
            {
                name: 'Nama',
                selector: row => row.kode,
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
                                    <h4 className="page-title">Kategori Barang.</h4>
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
                                            <h4 className="card-title">Kategori Barang</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <Link to="kategori/add" class="btn btn-secondary btn-sm"><i className="fa fa-add"></i>Tambah kategori</Link>
                                                <DataTable
                                                    columns={columns}
                                                    data={data}
                                                    pagination
                                                    expandableRows
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


export default Kategori;