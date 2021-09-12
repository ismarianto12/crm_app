import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/atlantis.css';
import '../../assets/css/atlantis.min.css';
import '../../assets/css/demo.css';
import $ from 'jquery';


import {
    Link,
    useParams
} from "react-router-dom";

// import * as ReactBootstrap from "react-bootstrap";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

class Header extends React.Component {
    constructor(props) {
        super(props);
        let username = localStorage.getItem('username');
        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            active: false,
            sidebar: false,

            username: username
        };
    }
    addActiveClass() {
        const currentState = this.state.active;
        this.setState({
            active: !currentState,
            sidebar: !currentState,
        });
    };

    render() {
        return (

            <>
                <Helmet>
                    <title>{this.props.title}</title>
                </Helmet>
                <div className="wrapper">
                    <div className="main-header">
                        {/* Logo Header */}
                        <div className="logo-header" data-background-color="white">
                            <Link to="/index.html" className="logo">
                                <img src="../logo192.png" alt="navbar brand" className="navbar-brand" style={{
                                    width: 40,
                                    height: 40
                                }} />
                                <b>CRM - APP</b>
                            </Link>
                            <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                    <i className="icon-menu" />
                                </span>
                            </button>
                            <button className="topbar-toggler more"><i className="icon-options-vertical" /></button>
                            <div className="nav-toggle">
                                <button className="btn btn-toggle toggle-sidebar">
                                    <i className="icon-menu" />
                                </button>
                            </div>
                        </div>
                        {/* End Logo Header */}
                        {/* Navbar Header */}
                        <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
                            <div className="container-fluid">
                                <div className="collapse" id="search-nav">
                                    <form className="navbar-left navbar-form nav-search mr-md-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button type="submit" className="btn btn-search pr-1">
                                                    <i className="fa fa-search search-icon" />
                                                </button>
                                            </div>
                                            <input type="text" placeholder="Search ..." className="form-control" />
                                        </div>
                                    </form>
                                </div>
                                <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                                    <li className="nav-item toggle-nav-search hidden-caret">
                                        <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                                            <i className="fa fa-search" />
                                        </a>
                                    </li>

                                    <li className="nav-item dropdown hidden-caret">
                                        <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-bell" />
                                            <span className="notification">4</span>
                                        </a>
                                        <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                                            <li>
                                                <div className="dropdown-title">You have 4 new notification</div>
                                            </li>
                                            <li>
                                                <div className="notif-scroll scrollbar-outer">
                                                    <div className="notif-center">
                                                        <a href="#">
                                                            <div className="notif-icon notif-primary"> <i className="fa fa-user-plus" /> </div>
                                                            <div className="notif-content">
                                                                <span className="block">
                                                                    New user registered
                                                                </span>
                                                                <span className="time">5 minutes ago</span>
                                                            </div>
                                                        </a>
                                                        <a href="#">
                                                            <div className="notif-icon notif-success"> <i className="fa fa-comment" /> </div>
                                                            <div className="notif-content">
                                                                <span className="block">
                                                                    Rahmad commented on Admin
                                                                </span>
                                                                <span className="time">12 minutes ago</span>
                                                            </div>
                                                        </a>
                                                        <a href="#">
                                                            <div className="notif-img">
                                                                <img src="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/assets/img/profile.jpg" alt="Img Profile" />
                                                            </div>
                                                            <div className="notif-content">
                                                                <span className="block">
                                                                    Reza send messages to you
                                                                </span>
                                                                <span className="time">12 minutes ago</span>
                                                            </div>
                                                        </a>
                                                        <a href="#">
                                                            <div className="notif-icon notif-danger"> <i className="fa fa-heart" /> </div>
                                                            <div className="notif-content">
                                                                <span className="block">
                                                                    Farrah liked Admin
                                                                </span>
                                                                <span className="time">17 minutes ago</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="see-all" href="javascript:void(0);">See all notifications<i className="fa fa-angle-right" /> </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown hidden-caret">
                                        <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                                            <i className="fa fa-layer-group" />
                                        </a>
                                        <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                                            <div className="quick-actions-header">
                                                <span className="title mb-1">Quick Actions</span>
                                                <span className="subtitle op-8">Shortcuts</span>
                                            </div>
                                            <div className="quick-actions-scroll scrollbar-outer">
                                                <div className="quick-actions-items">
                                                    <div className="row m-0">
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-danger rounded-circle">
                                                                    <i className="far fa-calendar-alt" />
                                                                </div>
                                                                <span className="text">Calendar</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-warning rounded-circle">
                                                                    <i className="fa fa-map" />
                                                                </div>
                                                                <span className="text">Maps</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-info rounded-circle">
                                                                    <i className="fa fa-file-excel" />
                                                                </div>
                                                                <span className="text">Reports</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-success rounded-circle">
                                                                    <i className="fa fa-envelope" />
                                                                </div>
                                                                <span className="text">Emails</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-primary rounded-circle">
                                                                    <i className="fa fa-file-invoice-dollar" />
                                                                </div>
                                                                <span className="text">Invoice</span>
                                                            </div>
                                                        </a>
                                                        <a className="col-6 col-md-4 p-0" href="#">
                                                            <div className="quick-actions-item">
                                                                <div className="avatar-item bg-secondary rounded-circle">
                                                                    <i className="fa fa-credit-card" />
                                                                </div>
                                                                <span className="text">Payments</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link quick-sidebar-toggler">
                                            <i className="fa fa-th" />
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown hidden-caret">
                                        <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="{this.state.sidebar ? true : false}" onClick={this.addActiveClass}>
                                            <p>
                                                <h3> <Link to="/logout" className="btn-primary">Logout</Link></h3>
                                            </p>
                                        </a>
                                        <ul className="dropdown-menu dropdown-user animated fadeIn">
                                            <div className="dropdown-user-scroll scrollbar-outer">
                                                <li>
                                                    <div className="user-box">
                                                        <div className="avatar-lg"><img src="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/assets/img/profile.jpg" alt="image profile" className="avatar-img rounded" /></div>
                                                        <div className="u-text">
                                                            <h4>{this.state.username}</h4>
                                                            <p className="text-muted">hello@example.com</p><a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">My Profile</a>
                                                    <a className="dropdown-item" href="#">My Balance</a>
                                                    <a className="dropdown-item" href="#">Inbox</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">Account Setting</a>
                                                    <div className="dropdown-divider" />
                                                    <a className="dropdown-item" href="#">Logout</a>
                                                </li>
                                            </div>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* End Navbar */}
                    </div>
                    {/* Sidebar */}
                    <div className="sidebar sidebar-style-2">
                        <div

                            className={this.state.active ? 'sidebar-wrapper scrollbar scrollbar-inner scroll-content scroll-scrolly_visible' : 'sidebar-wrapper scrollbar scrollbar-inner scroll-content scroll-scrolly_visible'}
                            onClick={
                                this.addActiveClass
                            }>
                            <div className="sidebar-content">
                                <div className="user">
                                    <div className="avatar-sm float-left mr-2">
                                        <img src="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>
                                    <div className="info">
                                        <a data-toggle="collapse" href="#collapseExample" aria-expanded="true" className="collapsed">
                                            <span>
                                                {this.state.username}
                                                <span className="user-level">Administrator</span>
                                                <span className="caret" />
                                            </span>
                                        </a>
                                        <div className="clearfix" />
                                        <div className={this.state.active ? 'in collapse show' : 'in collapse'}
                                            onClick={
                                                this.addActiveClass
                                            } id="collapseExample">
                                            <ul className="nav">
                                                <li>
                                                    <a href="#profile">
                                                        <span className="link-collapse">My Profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#edit">
                                                        <span className="link-collapse">Edit Profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#settings">
                                                        <span className="link-collapse">Settings</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav nav-primary">
                                    <li className="nav-item active">
                                        <Link to="/dashboard">
                                            <i className="fa fa-home" />
                                            <p>Dashboard</p>

                                            {/* {console.log(localStorage.getItem('user'))} */}
                                        </Link>
                                        <div className="collapse" id="dashboard">
                                            <ul className="nav nav-collapse">
                                                <li>
                                                    <a href="index.html">
                                                        <span className="sub-item">Dashboard</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/demo2/index.html">
                                                        <span className="sub-item">Dashboard 2</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/demo3/index.html">
                                                        <span className="sub-item">Dashboard 3</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/demo4/index.html">
                                                        <span className="sub-item">Dashboard 4</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/demo5/index.html">
                                                        <span className="sub-item">Dashboard 5</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/demo6/index.html">
                                                        <span className="sub-item">Dashboard 6</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/demo7/index.html">
                                                        <span className="sub-item">Dashboard 7</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/demo8/index.html">
                                                        <span className="sub-item">Dashboard 8</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://themekita.com/demo-atlantis-bootstrap/livepreview/examples/demo9/index.html">
                                                        <span className="sub-item">Dashboard 9</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-section">
                                        <span className="sidebar-mini-icon">
                                            <i className="fa fa-ellipsis-h" />
                                        </span>
                                        <h4 className="text-section">Master data</h4>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/suplier">
                                            <i className="fa fa-th-list" />
                                            <p>Data Supplier</p>
                                            <span className="badge badge-count">4</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/barang">
                                            <i className="fa fa-file" />
                                            <p>Master data barang</p>
                                            <span className="badge badge-count">5</span>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link to="/kategori">
                                            <i className="fa fa-cube" />
                                            <p>Master Kategory</p>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/user">
                                            <i className="fa fa-th-list" />
                                            <p>Transaksi </p>
                                            <span className="badge badge-count">4</span>
                                        </Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link to="/user">
                                            <i className="fa fa-th-list" />
                                            <p>Purchase </p>
                                            <span className="badge badge-count">4</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/user">
                                            <i className="fa fa-th-list" />
                                            <p>Report </p>
                                            <span className="badge badge-count">4</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/akuntansi">
                                            <i className="fa fa-th-list" />
                                            <p>Accouting </p>
                                            <span className="badge badge-count">4</span>
                                        </Link>
                                    </li> 

                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Sidebar */}
                    <div className="main-panel" style={{ background: "#fff" }}>
                        {this.props.container}
                        <footer className="footer">
                            <div className="container-fluid">
                                <nav className="pull-left">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="http://www.themekita.com/">
                                                ThemeKita
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Help
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                Licenses
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="copyright ml-auto">
                                    2018, made with <i className="fa fa-heart heart text-danger" /> by <a href="http://www.themekita.com/">ThemeKita</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                    <div className="quick-sidebar">
                        <a href="#" className="close-quick-sidebar">
                            <i className="flaticon-cross" />
                        </a>
                        <div className="quick-sidebar-wrapper">
                            <ul className="nav nav-tabs nav-line nav-color-secondary" role="tablist">
                                <li className="nav-item"> <a className="nav-link active show" data-toggle="tab" href="#messages" role="tab" aria-selected="true">Messages</a> </li>
                                <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#tasks" role="tab" aria-selected="false">Tasks</a> </li>
                                <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#settings" role="tab" aria-selected="false">Settings</a> </li>
                            </ul>
                            <div className="tab-content mt-3">
                                <div className="tab-chat tab-pane fade show active" id="messages" role="tabpanel">
                                    <div className="messages-contact">
                                        <div className="quick-wrapper">
                                            <div className="quick-scroll scrollbar-outer">
                                                <div className="quick-content contact-content">
                                                    <span className="category-title mt-0">Contacts</span>
                                                    <div className="avatar-group">
                                                        <div className="avatar">
                                                            <img src="../assets/img/jm_denis.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                        </div>
                                                        <div className="avatar">
                                                            <img src="../assets/img/chadengle.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                        </div>
                                                        <div className="avatar">
                                                            <img src="../assets/img/mlane.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                        </div>
                                                        <div className="avatar">
                                                            <img src="../assets/img/talha.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                        </div>
                                                        <div className="avatar">
                                                            <span className="avatar-title rounded-circle border border-white">+</span>
                                                        </div>
                                                    </div>
                                                    <span className="category-title">Recent</span>
                                                    <div className="contact-list contact-list-recent">
                                                        <div className="user">
                                                            <a href="#">
                                                                <div className="avatar avatar-online">
                                                                    <img src="../assets/img/jm_denis.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                                </div>
                                                                <div className="user-data">
                                                                    <span className="name">Jimmy Denis</span>
                                                                    <span className="message">How are you ?</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="user">
                                                            <a href="#">
                                                                <div className="avatar avatar-offline">
                                                                    <img src="../assets/img/chadengle.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                                </div>
                                                                <div className="user-data">
                                                                    <span className="name">Chad</span>
                                                                    <span className="message">Ok, Thanks !</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="user">
                                                            <a href="#">
                                                                <div className="avatar avatar-offline">
                                                                    <img src="../assets/img/mlane.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                                </div>
                                                                <div className="user-data">
                                                                    <span className="name">John Doe</span>
                                                                    <span className="message">Ready for the meeting today with...</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <span className="category-title">Other Contacts</span>
                                                    <div className="contact-list">
                                                        <div className="user">
                                                            <a href="#">
                                                                <div className="avatar avatar-online">
                                                                    <img src="../assets/img/jm_denis.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                                </div>
                                                                <div className="user-data2">
                                                                    <span className="name">Jimmy Denis</span>
                                                                    <span className="status">Online</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="user">
                                                            <a href="#">
                                                                <div className="avatar avatar-offline">
                                                                    <img src="../assets/img/chadengle.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                                </div>
                                                                <div className="user-data2">
                                                                    <span className="name">Chad</span>
                                                                    <span className="status">Active 2h ago</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="user">
                                                            <a href="#">
                                                                <div className="avatar avatar-away">
                                                                    <img src="../assets/img/talha.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                                </div>
                                                                <div className="user-data2">
                                                                    <span className="name">Talha</span>
                                                                    <span className="status">Away</span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="messages-wrapper">
                                        <div className="messages-title">
                                            <div className="user">
                                                <div className="avatar avatar-offline float-right ml-2">
                                                    <img src="../assets/img/chadengle.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                </div>
                                                <span className="name">Chad</span>
                                                <span className="last-active">Active 2h ago</span>
                                            </div>
                                            <button className="return">
                                                <i className="flaticon-left-arrow-3" />
                                            </button>
                                        </div>
                                        <div className="messages-body messages-scroll scrollbar-outer">
                                            <div className="message-content-wrapper">
                                                <div className="message message-in">
                                                    <div className="avatar avatar-sm">
                                                        <img src="../assets/img/chadengle.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                    </div>
                                                    <div className="message-body">
                                                        <div className="message-content">
                                                            <div className="name">Chad</div>
                                                            <div className="content">Hello, Rian</div>
                                                        </div>
                                                        <div className="date">12.31</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="message-content-wrapper">
                                                <div className="message message-out">
                                                    <div className="message-body">
                                                        <div className="message-content">
                                                            <div className="content">
                                                                Hello, Chad
                                                            </div>
                                                        </div>
                                                        <div className="message-content">
                                                            <div className="content">
                                                                What's up?
                                                            </div>
                                                        </div>
                                                        <div className="date">12.35</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="message-content-wrapper">
                                                <div className="message message-in">
                                                    <div className="avatar avatar-sm">
                                                        <img src="../assets/img/chadengle.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                    </div>
                                                    <div className="message-body">
                                                        <div className="message-content">
                                                            <div className="name">Chad</div>
                                                            <div className="content">
                                                                Thanks
                                                            </div>
                                                        </div>
                                                        <div className="message-content">
                                                            <div className="content">
                                                                When is the deadline of the project we are working on ?
                                                            </div>
                                                        </div>
                                                        <div className="date">13.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="message-content-wrapper">
                                                <div className="message message-out">
                                                    <div className="message-body">
                                                        <div className="message-content">
                                                            <div className="content">
                                                                The deadline is about 2 months away
                                                            </div>
                                                        </div>
                                                        <div className="date">13.10</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="message-content-wrapper">
                                                <div className="message message-in">
                                                    <div className="avatar avatar-sm">
                                                        <img src="../assets/img/chadengle.jpg" alt="..." className="avatar-img rounded-circle border border-white" />
                                                    </div>
                                                    <div className="message-body">
                                                        <div className="message-content">
                                                            <div className="name">Chad</div>
                                                            <div className="content">
                                                                Ok, Thanks !
                                                            </div>
                                                        </div>
                                                        <div className="date">13.15</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="messages-form">
                                            <div className="messages-form-control">
                                                <input type="text" placeholder="Type here" className="form-control input-pill input-solid message-input" />
                                            </div>
                                            <div className="messages-form-tool">
                                                <a href="#" className="attachment">
                                                    <i className="flaticon-file" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tasks" role="tabpanel">
                                    <div className="quick-wrapper tasks-wrapper">
                                        <div className="tasks-scroll scrollbar-outer">
                                            <div className="tasks-content">
                                                <span className="category-title mt-0">Today</span>
                                                <ul className="tasks-list">
                                                    <li>
                                                        <label className="custom-checkbox custom-control checkbox-secondary">
                                                            <input type="checkbox" defaultChecked className="custom-control-input" /><span className="custom-control-label">Planning new project structure</span>
                                                            <span className="task-action">
                                                                <a href="#" className="link text-danger">
                                                                    <i className="flaticon-interface-5" />
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom-checkbox custom-control checkbox-secondary">
                                                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Create the main structure							</span>
                                                            <span className="task-action">
                                                                <a href="#" className="link text-danger">
                                                                    <i className="flaticon-interface-5" />
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom-checkbox custom-control checkbox-secondary">
                                                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Add new Post</span>
                                                            <span className="task-action">
                                                                <a href="#" className="link text-danger">
                                                                    <i className="flaticon-interface-5" />
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom-checkbox custom-control checkbox-secondary">
                                                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Finalise the design proposal</span>
                                                            <span className="task-action">
                                                                <a href="#" className="link text-danger">
                                                                    <i className="flaticon-interface-5" />
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </li>
                                                </ul>
                                                <span className="category-title">Tomorrow</span>
                                                <ul className="tasks-list">
                                                    <li>
                                                        <label className="custom-checkbox custom-control checkbox-secondary">
                                                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Initialize the project							</span>
                                                            <span className="task-action">
                                                                <a href="#" className="link text-danger">
                                                                    <i className="flaticon-interface-5" />
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom-checkbox custom-control checkbox-secondary">
                                                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Create the main structure							</span>
                                                            <span className="task-action">
                                                                <a href="#" className="link text-danger">
                                                                    <i className="flaticon-interface-5" />
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom-checkbox custom-control checkbox-secondary">
                                                            <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Updates changes to GitHub							</span>
                                                            <span className="task-action">
                                                                <a href="#" className="link text-danger">
                                                                    <i className="flaticon-interface-5" />
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="custom-checkbox custom-control checkbox-secondary">
                                                            <input type="checkbox" className="custom-control-input" /><span title="This task is too long to be displayed in a normal space!" className="custom-control-label">This task is too long to be displayed in a normal space!				</span>
                                                            <span className="task-action">
                                                                <a href="#" className="link text-danger">
                                                                    <i className="flaticon-interface-5" />
                                                                </a>
                                                            </span>
                                                        </label>
                                                    </li>
                                                </ul>
                                                <div className="mt-3">
                                                    <div className="btn btn-primary btn-rounded btn-sm">
                                                        <span className="btn-label">
                                                            <i className="fa fa-plus" />
                                                        </span>
                                                        Add Task
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="settings" role="tabpanel">
                                    <div className="quick-wrapper settings-wrapper">
                                        <div className="quick-scroll scrollbar-outer">
                                            <div className="quick-content settings-content">
                                                <span className="category-title mt-0">General Settings</span>
                                                <ul className="settings-list">
                                                    <li>
                                                        <span className="item-label">Enable Notifications</span>
                                                        <div className="item-control">
                                                            <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="primary" data-style="btn-round" data-size />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="item-label">Signin with social media</span>
                                                        <div className="item-control">
                                                            <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="item-label">Backup storage</span>
                                                        <div className="item-control">
                                                            <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="item-label">SMS Alert</span>
                                                        <div className="item-control">
                                                            <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                                                        </div>
                                                    </li>
                                                </ul>
                                                <span className="category-title mt-0">Notifications</span>
                                                <ul className="settings-list">
                                                    <li>
                                                        <span className="item-label">Email Notifications</span>
                                                        <div className="item-control">
                                                            <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="item-label">New Comments</span>
                                                        <div className="item-control">
                                                            <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="item-label">Chat Messages</span>
                                                        <div className="item-control">
                                                            <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="item-label">Project Updates</span>
                                                        <div className="item-control">
                                                            <input type="checkbox" data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="item-label">New Tasks</span>
                                                        <div className="item-control">
                                                            <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="primary" data-style="btn-round" />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Custom template | don't include it in your project! */}
                    <div className="custom-template">
                        <div className="title">Settings</div>
                        <div className="custom-content">
                            <div className="switcher">
                                <div className="switch-block">
                                    <h4>Logo Header</h4>
                                    <div className="btnSwitch">
                                        <button type="button" className="changeLogoHeaderColor" data-color="dark" />
                                        <button type="button" className="selected changeLogoHeaderColor" data-color="blue" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="purple" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="light-blue" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="green" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="orange" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="red" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="white" />
                                        <br />
                                        <button type="button" className="changeLogoHeaderColor" data-color="dark2" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="blue2" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="purple2" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="light-blue2" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="green2" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="orange2" />
                                        <button type="button" className="changeLogoHeaderColor" data-color="red2" />
                                    </div>
                                </div>
                                <div className="switch-block">
                                    <h4>Navbar Header</h4>
                                    <div className="btnSwitch">
                                        <button type="button" className="changeTopBarColor" data-color="dark" />
                                        <button type="button" className="changeTopBarColor" data-color="blue" />
                                        <button type="button" className="changeTopBarColor" data-color="purple" />
                                        <button type="button" className="changeTopBarColor" data-color="light-blue" />
                                        <button type="button" className="changeTopBarColor" data-color="green" />
                                        <button type="button" className="changeTopBarColor" data-color="orange" />
                                        <button type="button" className="changeTopBarColor" data-color="red" />
                                        <button type="button" className="changeTopBarColor" data-color="white" />
                                        <br />
                                        <button type="button" className="changeTopBarColor" data-color="dark2" />
                                        <button type="button" className="selected changeTopBarColor" data-color="blue2" />
                                        <button type="button" className="changeTopBarColor" data-color="purple2" />
                                        <button type="button" className="changeTopBarColor" data-color="light-blue2" />
                                        <button type="button" className="changeTopBarColor" data-color="green2" />
                                        <button type="button" className="changeTopBarColor" data-color="orange2" />
                                        <button type="button" className="changeTopBarColor" data-color="red2" />
                                    </div>
                                </div>
                                <div className="switch-block">
                                    <h4>Sidebar</h4>
                                    <div className="btnSwitch">
                                        <button type="button" className="selected changeSideBarColor" data-color="white" />
                                        <button type="button" className="changeSideBarColor" data-color="dark" />
                                        <button type="button" className="changeSideBarColor" data-color="dark2" />
                                    </div>
                                </div>
                                <div className="switch-block">
                                    <h4>Background</h4>
                                    <div className="btnSwitch">
                                        <button type="button" className="changeBackgroundColor" data-color="bg2" />
                                        <button type="button" className="changeBackgroundColor selected" data-color="bg1" />
                                        <button type="button" className="changeBackgroundColor" data-color="bg3" />
                                        <button type="button" className="changeBackgroundColor" data-color="dark" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-toggle">
                            <i className="flaticon-settings" />
                        </div>
                    </div>
                    {/* End Custom template */}
                </div>

            </>
        )
    }
}

export default Header;