import axios from 'axios';
import React from 'react';
import API_URL from '../../../utils/env';
import Header from '../../templates/templates';
import { Link } from 'react-router-dom';
import { data } from 'jquery';
import DataTable from 'react-data-table-component';

class Listuser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Editdata: false,
            Addata: false,
            items: []
        };
    }
    componentDidMount() {
        this.Refreshdata();
    }


    Editdata = (id) => {

        this.setState({ Editdata: true, Addata: false });
        let { from } = this.props.location.state || { from: { pathname: `user/edit/${id}` } }
        this.props.history.replace(from);
    }


    Hapusdata = (id) => {
        let { url } = this.props.lication.state || { from: { pathname: `user/delete/${id}` } }
        this.props.history.replace(url);
    }

    Refreshdata = () => {
        let token = localStorage.getItem('token');
        let config = {
            url: API_URL() + 'user/list',
            mehtod: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        };
        axios(config).then((res) => {
            let a = res.data.data;
            // console.log(a);
            this.setState({
                isLoaded: false,
                items: a
            });
        }).catch((err) => {
            console.log('server cont response');
        });
    }

    render() {
        let data = this.state.items;
        console.log('fuck' + data);
        const columns = [
            {
                name: "Kode ",
                selector: row => row.kode,
            },
            {
                name: "Nama ",
                selector: row => row.nama,
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


        return (
            <Header title={'daftar list user'} container={
                <>
                    <div className="page-inner">

                        <div className="row">
                            <div className="page-header">
                                <h4 className="page-title">Suplier Barang.</h4>
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
                                        <h4 className="card-title">Master user</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <Link to="suplier/add" class="btn btn-secondary btn-sm"><i className="fa fa-add"></i>Tambah data user</Link>
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
            } />
        );
    }
}




export default Listuser;