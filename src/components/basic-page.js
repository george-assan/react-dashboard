import React, { Component } from 'react';
import Table from './table';

class BasicPage extends Component {
    
    state = {
                data: [{"id":1,"name":"John", "age":31, "city":"New York"},{"id":2,"name":"James", "age":20, "city":"Accra"}]
            }

    
    sortBy = (key) =>{
    let data = this.state.data;
        this.setState({
            data: data.sort((a,b) => {
                return parseFloat(a[key]) - parseFloat(b[key])
            })
        })
        
    }


    render() {
        return (
            <div>
                <Table data={this.state.data} sortBy={this.sortBy} />
            </div>

        )
    }
}
export default BasicPage;









