import React, { Component, Fragment } from "react";
import AddItems from "./Components/addItems";
import TodoItems from "./Components/todoItems";
import './style.css';
class App extends Component {
    state = {
        items : [
            { id : 1, name : 'Anwar', age : 24 },
            { id : 2, name : 'Ahmed', age : 25 },
            { id : 3, name : 'Mohamed', age : 26 }
        ]
    }

    // // Delete Items
    // deleteItem = (id) => {
    //     // console.log(id);
    //     // Store [this.state.items] in items Variable 
    //     let items = this.state.items;
    //     // Check items.id === id 
    //     let checkId = items.findIndex( item => item.id === id )
    //     // If items.id === id ====> Delete this item
    //     items.splice( checkId, 1 )
    //     // Then Update Items : Items Use Function SetState({})
    //     this.setState({ items : items })
    // }

    deleteItem = (id) => {
        let items = this.state.items.filter( item => {
            return item.id !== id
        } )
        this.setState({ items : items })
    }

    addItems = (itemOfAdd) => {
        itemOfAdd.id = Math.random()
        let items = this.state.items
        items.push( itemOfAdd )
        this.setState({ items : items })
    }


    render() { 
        return (
            <Fragment>
                <div className="app">
                    <h1 className="name-project">React TodoList App</h1>
                    <AddItems addItems={this.addItems} />
                    <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
                </div>
            </Fragment>
        );
    }
}
 
export default App;