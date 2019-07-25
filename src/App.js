import React, { Component } from 'react';
import Navbar from './components/layout/navbar';
import PageHeader from './components/layout/page-header';
import Notification from './components/layout/notification';
import BasicPage from './components/basic-page'


class App extends Component{

  render(){
    return (
      <div className="App">
        <Notification/>
        <Navbar/>
          <div className="main-content">
            <div className="container-fluid">
              <PageHeader/>
               <BasicPage/>
            </div>
          </div>
      </div>
    );
  }

}

export default App;
