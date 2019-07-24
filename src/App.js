import React, { Component } from 'react';
import Navbar from './components/layout/navbar';
import PageHeader from './components/layout/page-header';
import Table from './components/table'

class App extends Component{

  render(){
    return (
      <div className="App">
        <Navbar/>
          <div className="main-content">
            <div className="container-fluid">
              <PageHeader/>
                <Table/>
            </div>
          </div>
      </div>
    );
  }

}

export default App;
