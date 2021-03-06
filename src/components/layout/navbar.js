import React from 'react';
import logo from '../../assets/img/logo.svg'

const Navbar = () => {

    return (
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
            <div className="container-fluid">
                 {/* Toggler */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Brand */}
                <a className="navbar-brand" href="index.html">
                    <img src={logo} class="navbar-brand-img mx-auto" alt="..."/>
                </a>

                {/* User (xs) */}
                <div className="navbar-user d-md-none">

                     {/* Dropdown */}
                    <div className="dropdown">

                    {/* Toggle  */}
                    <a href="#!" id="sidebarIcon" className="dropdown-toggle" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <div class="avatar avatar-sm avatar-online">
                        <img src="assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
                        </div>
                    </a>

                    {/* Menu */}
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
                        <a href="profile-posts.html" className="dropdown-item">Profile</a>
                        <a href="settings.html" className="dropdown-item">Settings</a>
                        <hr className="dropdown-divider"/>
                        <a href="sign-in.html" className="dropdown-item">Logout</a>
                    </div>

                    </div>

                </div>

                {/* Collapse */}
                <div className="collapse navbar-collapse" id="sidebarCollapse">

                    {/* Form */}
                    <form className="mt-4 mb-3 d-md-none">
                    <div className="input-group input-group-rounded input-group-merge">
                        <input type="search" class="form-control form-control-rounded form-control-prepended" placeholder="Search"
                        aria-label="Search"/>
                        <div className="input-group-prepend">
                        <div className="input-group-text">
                            <span className="fe fe-search"></span>
                        </div>
                        </div>
                    </div>
                    </form>

                    {/* Navigation */}
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#sidebarDashboards" data-toggle="collapse" role="button" aria-expanded="true"
                        aria-controls="sidebarDashboards">
                        <i className="fe fe-home"></i> Dashboards
                        </a>
                        <div className="collapse show" id="sidebarDashboards">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a href="index.html" class="nav-link active">
                                Default
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="dashboard-alt.html" className="nav-link ">
                                Alternative <span class="badge badge-soft-success ml-auto">New</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#sidebarPages" data-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarPages">
                        <i className="fe fe-file"></i> Pages
                        </a>
                        <div className="collapse " id="sidebarPages">
                        <ul className="nav nav-sm flex-column">
                            <li className="nav-item">
                            <a href="#sidebarProfile" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="sidebarProfile">
                                Profile
                            </a>
                            <div className="collapse " id="sidebarProfile">
                                <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                    <a href="profile-posts.html" className="nav-link ">
                                    Posts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="profile-groups.html" className="nav-link ">
                                    Groups
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="profile-projects.html" class="nav-link ">
                                    Projects
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="profile-files.html" class="nav-link ">
                                    Files
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="profile-subscribers.html" class="nav-link ">
                                    Subscribers
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </li>
                            <li class="nav-item">
                            <a href="#sidebarProject" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="sidebarProject">
                                Project
                            </a>
                            <div class="collapse " id="sidebarProject">
                                <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <a href="project-overview.html" class="nav-link ">
                                    Overview
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="project-files.html" class="nav-link ">
                                    Files
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="project-reports.html" class="nav-link ">
                                    Reports
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="project-new.html" class="nav-link ">
                                    New project
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </li>
                            <li class="nav-item">
                            <a href="#sidebarTeam" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="sidebarTeam">
                                Team
                            </a>
                            <div class="collapse " id="sidebarTeam">
                                <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <a href="team-overview.html" class="nav-link ">
                                    Overview
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="team-projects.html" class="nav-link ">
                                    Projects
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="team-members.html" class="nav-link ">
                                    Members
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="team-new.html" class="nav-link ">
                                    New team
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </li>
                            <li class="nav-item">
                            <a href="orders.html" class="nav-link ">
                                Orders
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="feed.html" class="nav-link ">
                                Feed
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="settings.html" class="nav-link ">
                                Settings
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="invoice.html" class="nav-link ">
                                Invoice
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="pricing.html" class="nav-link ">
                                Pricing
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#sidebarAuth" data-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarAuth">
                        <i class="fe fe-user"></i> Authentication
                        </a>
                        <div class="collapse" id="sidebarAuth">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                            <a href="#sidebarSignIn" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="sidebarSignIn">
                                Sign in
                            </a>
                            <div class="collapse" id="sidebarSignIn">
                                <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <a href="sign-in-cover.html" class="nav-link">
                                    Cover
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="sign-in-illustration.html" class="nav-link">
                                    Illustration
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="sign-in.html" class="nav-link">
                                    Basic
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </li>
                            <li class="nav-item">
                            <a href="#sidebarSignUp" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="sidebarSignUp">
                                Sign up
                            </a>
                            <div class="collapse" id="sidebarSignUp">
                                <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <a href="sign-up-cover.html" class="nav-link">
                                    Cover
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="sign-up-illustration.html" class="nav-link">
                                    Illustration
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="sign-up.html" class="nav-link">
                                    Basic
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </li>
                            <li class="nav-item">
                            <a href="#sidebarPassword" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="sidebarPassword">
                                Password reset
                            </a>
                            <div class="collapse" id="sidebarPassword">
                                <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <a href="password-reset-cover.html" class="nav-link">
                                    Cover
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="password-reset-illustration.html" class="nav-link">
                                    Illustration
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="password-reset.html" class="nav-link">
                                    Basic
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </li>
                            <li class="nav-item">
                            <a href="#sidebarError" class="nav-link" data-toggle="collapse" role="button" aria-expanded="false"
                                aria-controls="sidebarError">
                                Error
                            </a>
                            <div class="collapse" id="sidebarError">
                                <ul class="nav nav-sm flex-column">
                                <li class="nav-item">
                                    <a href="error-illustration.html" class="nav-link">
                                    Illustration
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="error.html" class="nav-link">
                                    Basic
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li class="nav-item d-md-none">
                        <a class="nav-link" href="#sidebarModalActivity" data-toggle="modal">
                        <span class="fe fe-bell"></span> Notifications
                        </a>
                    </li>
                    </ul>

                    {/* Divider */}
                    <hr class="navbar-divider my-3"/>

                    {/* Heading */}
                    <h6 class="navbar-heading">
                    Documentation
                    </h6>

                    {/* Navigation */}
                    <ul class="navbar-nav mb-md-4">
                    <li class="nav-item">
                        <a class="nav-link " href="getting-started.html">
                        <i class="fe fe-clipboard"></i> Getting started
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#sidebarComponents" data-toggle="collapse" role="button" aria-expanded="false"
                        aria-controls="sidebarComponents">
                        <i class="fe fe-book-open"></i> Components
                        </a>
                        <div class="collapse " id="sidebarComponents">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                            <a href="components.html#alerts" class="nav-link">
                                Alerts
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#avatars" class="nav-link">
                                Avatars
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#badges" class="nav-link">
                                Badges
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#breadcrumb" class="nav-link">
                                Breadcrumb
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#buttons" class="nav-link">
                                Buttons
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#button-group" class="nav-link">
                                Button group
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#cards" class="nav-link">
                                Cards
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#charts" class="nav-link">
                                Charts
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#dropdowns" class="nav-link">
                                Dropdowns
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#forms" class="nav-link">
                                Forms
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#icons" class="nav-link">
                                Icons
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#lists" class="nav-link">
                                Lists
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#loaders" class="nav-link">
                                Loaders
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#modal" class="nav-link">
                                Modal
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#navs" class="nav-link">
                                Navs
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#navbarExample" class="nav-link">
                                Navbar
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#page-headers" class="nav-link">
                                Page headers
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#pagination" class="nav-link">
                                Pagination
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#popovers" class="nav-link">
                                Popovers
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#progress" class="nav-link">
                                Progress
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#social-posts" class="nav-link">
                                Social post
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#tables" class="nav-link">
                                Tables
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#tooltips" class="nav-link">
                                Tooltips
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#typography" class="nav-link">
                                Typography
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="components.html#utilities" class="nav-link">
                                Utilities
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="changelog.html">
                        <i class="fe fe-git-branch"></i> Changelog <span class="badge badge-primary ml-auto">v1.3.0</span>
                        </a>
                    </li>
                    </ul>

                    {/* Push content down */}
                    <div class="mt-auto"></div>


                    {/* Customize */}
                    <a href="#modalDemo" class="btn btn-block btn-primary mb-4" data-toggle="modal">
                    <i class="fe fe-sliders mr-2"></i> Customize
                    </a>



                    {/* User (md) */}
                    <div class="navbar-user d-none d-md-flex" id="sidebarUser">

                    {/* Icon */}
                    <a href="#modalVerticalLeft" class="navbar-user-link" data-toggle="modal">
                        <span class="icon">
                        <i class="fe fe-bell"></i>
                        </span>
                    </a>

                    {/* Dropup */}
                    <div class="dropup">

                        {/* Toggle */}
                        <a href="#!" id="sidebarIconCopy" class="dropdown-toggle" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <div class="avatar avatar-sm avatar-online">
                            <img src="assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="..."/>
                        </div>
                        </a>

                        {/* Menu */}
                        <div class="dropdown-menu" aria-labelledby="sidebarIconCopy">
                        <a href="profile-posts.html" class="dropdown-item">Profile</a>
                        <a href="settings.html" class="dropdown-item">Settings</a>
                        <hr class="dropdown-divider"/>
                        <a href="sign-in.html" class="dropdown-item">Logout</a>
                        </div>

                    </div>

                    {/* Icon */}
                    <a href="#sidebarModalSearch" class="navbar-user-link" data-toggle="modal">
                        <span class="icon">
                        <i class="fe fe-search"></i>
                        </span>
                    </a>

                    </div>
                    </div>

                {/* / .navbar-collapse  */}

            </div>
        </nav>
    )
}

export default Navbar;