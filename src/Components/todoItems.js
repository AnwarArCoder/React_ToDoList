import React, { Fragment } from "react";
import './../style.css';
const TodoItems = (props) => {
    const {items} = props;
    const {deleteItem} = props;
    let lengthItems = items.length;
    const itemsList = lengthItems ? (
        items.map( item =>{
            return (
                <div className="item-name-age-delete" key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span onClick={ () => deleteItem(item.id) }>x</span>
                </div>
            )
        } )
    ) : ( <p className="no-text">There Is No item to Show</p> )

    // const itemsList = items.map( item =>{
    //     return (
    //         <div key={item.id}>
    //             <span>{item.name}</span>
    //             <span>{item.age}</span>
    //             <span onClick={ () => deleteItem(item.id) }>X</span>
    //         </div>
    //     )
    // } )
    return (
        <Fragment>
            <div className="todoitems">
                {itemsList}
            </div>
        </Fragment>
    )
}

export default TodoItems;