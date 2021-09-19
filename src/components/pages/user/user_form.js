import React from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import Header from '../../templates/templates';

class Userform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            notifikasi: '',
            valueform: [],
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.setState({ title: 'Edit data' });
        } else {
            this.setState({ title: 'Tambah data' });
        }

    }

    Handler = (event) => {
        event.preventDefault();
        const data = {
            email: this.state.valueform.email,
            username: this.state.valueform.username,
            password: this.state.valueform.password,
            ulangipassword: this.state.valueform.ulangipassword
        }
        if (data.password !== data.ulangipassword) {
            this.setState({
                notifikasi: "Password yang anda entrikan tidak sama silahkan ulangi ",
            });
        } else {
            this.setState({
                notifikasi: "",
            });
        }
    }

    render() {
        console.log(this.state.title)
        return (
            <Header title={'Masater data suplier'} container={
                <>
                    <div className="page-inner">

                        <div className="row">
                            <div className="page-header">
                                <h4 className="page-title">{this.title}</h4>
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
                                        <h4 className="card-title">{this.state.title}</h4>
                                    </div>
                                    <div className="card-body">
                                        {this.state.notifikasi}
                                        <form onSubmit={this.Handler} className="form-horizontal">
                                            <input type="hidden" name="user_id" value="1" />
                                            <div className="form-group row">
                                                <lable className="col-md-2">Username</lable>
                                                <div className="col-md-4">
                                                    <input name="username" className="form-control" placeholder="Kode Suplier .."
                                                        onChange={(event) => {
                                                            const { target } = event;
                                                            this.setState({
                                                                valueform: {
                                                                    ...this.state.valueform,
                                                                    username: target.value,
                                                                }
                                                            })
                                                        }}
                                                    />
                                                </div>
                                                <lable className="col-md-2">Email</lable>
                                                <div className="col-md-4">
                                                    <input name="email" className="form-control" placeholder="Email Suplier .."
                                                        onChange={(event) => {
                                                            const { target } = event;
                                                            this.setState({
                                                                valueform: {
                                                                    ...this.state.valueform,
                                                                    email: target.value,
                                                                }
                                                            })
                                                        }} />

                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <lable className="col-md-2">Password</lable>
                                                <div className="col-md-4">
                                                    <input type="password" name="kode" className="form-control" placeholder="Kode Suplier .."
                                                        onChange={(event) => {
                                                            const { target } = event;
                                                            this.setState({
                                                                valueform: {
                                                                    ...this.state.valueform,
                                                                    password: target.value,
                                                                }
                                                            })
                                                        }} />

                                                </div>
                                                <lable className="col-md-2">Ulangi Password</lable>
                                                <div className="col-md-4">
                                                    <input type="password" name="ulangipassword" className="form-control" placeholder="Kode Suplier .."
                                                        onChange={(event) => {
                                                            const { target } = event;
                                                            this.setState({
                                                                valueform: {
                                                                    ...this.state.valueform,
                                                                    ulangipassword: target.value,
                                                                }
                                                            })
                                                        }} />

                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <lable className="col-md-2">Level Akses</lable>
                                                <div className="col-md-4">
                                                    <select className="form-control">
                                                        <option value="1">Administrator</option>
                                                        <option value="2">User</option>
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

}

export default Userform;