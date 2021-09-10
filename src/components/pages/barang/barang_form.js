import axios from 'axios';
import React from "react";
import ReactDOM from "react-dom";
import API_URL from '../../../utils/env.js';
import DataTable from 'react-data-table-component';
import Header from '../../templates/templates';
import { Link } from 'react-router-dom';
import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
} from "reactstrap";
import NumberFormat from "react-number-format";
const item_validation_default = {
    item_name_invalid: false,
    item_package_invalid: false,
};

class Barangform extends React.Component {
    constructor(props) {
        super(props);
        this.stae = {
            item_validation: item_validation_default
        }
    }



    render() {
        return (
            <Header title={'Data barang'} container={
                <>
                    <div className="page-inner">

                        <div className="row">
                            <div className="page-header">
                                <h4 className="page-title">DataTables.Net</h4>
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
                                        <h4 className="card-title">Basic</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <h3>Barang</h3>    

                                            <Form>
                                                <FormGroup row>
                                                    <Label sm={2}>Kode Barang</Label>
                                                    <Col sm={6}>
                                                        <Input
                                                            // invalid={this.state.item_validation.item_name_invalid}
                                                            autoFocus
                                                            innerRef={(ref) => {
                                                                this.itemRef = ref;
                                                            }}
                                                            size="sm"
                                                            type="text"
                                                            name="item_name"
                                                            // value={this.state.item.item_name}
                                                            placeholder="Item name"
                                                            onChange={(event) => {
                                                                const { target } = event;
                                                                this.setState({
                                                                    item: {
                                                                        ...this.state.item,
                                                                        item_name: target.value,
                                                                    },
                                                                });
                                                            }}
                                                        />
                                                        <FormFeedback tooltip>Item name is required</FormFeedback>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label sm={2}>Nama Barang</Label>
                                                    <Col sm={6}>
                                                        <Input
                                                            // invalid={this.state.item_validation.item_name_invalid}
                                                            autoFocus
                                                            innerRef={(ref) => {
                                                                this.itemRef = ref;
                                                            }}
                                                            size="sm"
                                                            type="text"
                                                            name="item_name"
                                                            // value={this.state.item.item_name}
                                                            placeholder="Item name"
                                                            onChange={(event) => {
                                                                const { target } = event;
                                                                this.setState({
                                                                    item: {
                                                                        ...this.state.item,
                                                                        item_name: target.value,
                                                                    },
                                                                });
                                                            }}
                                                        />
                                                        <FormFeedback tooltip>Item name is required</FormFeedback>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label sm={2}>Stok</Label>
                                                    <Col sm={6}>
                                                        <Input
                                                            // invalid={this.state.item_validation.item_name_invalid}
                                                            autoFocus
                                                            innerRef={(ref) => {
                                                                this.itemRef = ref;
                                                            }}
                                                            size="sm"
                                                            type="text"
                                                            name="item_name"
                                                            // value={this.state.item.item_name}
                                                            placeholder="Item name"
                                                            onChange={(event) => {
                                                                const { target } = event;
                                                                this.setState({
                                                                    item: {
                                                                        ...this.state.item,
                                                                        item_name: target.value,
                                                                    },
                                                                });
                                                            }}
                                                        />
                                                        <FormFeedback tooltip>Item name is required</FormFeedback>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label sm={2}>Harga Jual</Label>
                                                    <Col sm={6}>
                                                        <Input
                                                            // invalid={this.state.item_validation.item_name_invalid}
                                                            autoFocus
                                                            innerRef={(ref) => {
                                                                this.itemRef = ref;
                                                            }}
                                                            size="sm"
                                                            type="text"
                                                            name="item_name"
                                                            // value={this.state.item.item_name}
                                                            placeholder="Item name"
                                                            onChange={(event) => {
                                                                const { target } = event;
                                                                this.setState({
                                                                    item: {
                                                                        ...this.state.item,
                                                                        item_name: target.value,
                                                                    },
                                                                });
                                                            }}
                                                        />
                                                        <FormFeedback tooltip>Item name is required</FormFeedback>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup row>
                                                    <Label sm={2}>Harga Beli</Label>
                                                    <Col sm={6}>
                                                        <Input
                                                            // invalid={this.state.item_validation.item_name_invalid}
                                                            autoFocus
                                                            innerRef={(ref) => {
                                                                this.itemRef = ref;
                                                            }}
                                                            size="sm"
                                                            type="text"
                                                            name="item_name"
                                                            // value={this.state.item.item_name}
                                                            placeholder="Item name"
                                                            onChange={(event) => {
                                                                const { target } = event;
                                                                this.setState({
                                                                    item: {
                                                                        ...this.state.item,
                                                                        item_name: target.value,
                                                                    },
                                                                });
                                                            }}
                                                        />
                                                        <FormFeedback tooltip>Item name is required</FormFeedback>
                                                    </Col>
                                                </FormGroup>
                                            
                                             
                                           
                                             
                                            </Form>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>

            } />
        )
    }

}

export default Barangform;