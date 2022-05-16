import React, { Component, Fragment } from "react";
import './../style.css';
class AddItems extends Component {
    state = {
        name : '',
        age : ''
    }

    handelChange = (event) => {
        // console.log( event.target.value )
        // console.log( '----------------' )
        // console.log( event.target.id )
        // [ event.target.id ] : event.target.value
        this.setState({
            [ event.target.id ] : event.target.value
        })
    }

    handelSubmit = (event) => {
        event.preventDefault()
        // console.log( this.state )
        // Send This State Component To App Component
        if( event.target.name.value === '' ){
            return false
        } else {
            this.props.addItems( this.state )
            this.setState({
                name : '',
                age : ''
            })
        }

    }

    render() { 
        return (
            <Fragment>
                <div className="additems">
                    <form onSubmit={this.handelSubmit}>
                        <input type='text' placeholder="Enter Your Name" id="name" onChange={this.handelChange} value={this.state.name} />
                        <input type="number" placeholder="Enter Your Number" id="age" onChange={this.handelChange} value={this.state.age} />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </Fragment>
        );
    }
}
 
export default AddItems;