import React from 'react';
import './todo.css';


const TodoList = (props) => {
    const {items, deleteItem} =props;
    let lng = items.length;
    const itemList = lng ? (
         items.map(item => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className='check'>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                    </span>
                    <span className="action icon" onClick= {() => {deleteItem(item.id)}}>&#10003;</span>
                </div>
            )
        }) 
    ) : (
        <p className="cond">There is no item to show</p>
    )

    
    return (
        <div className="listItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                {/*<span className="tasks title">
                        <span className="task">Tasks</span>*/}
                    {/*<div className="objects">*/}
                        <span className="math title">Math</span>
                        <span className="english title">English</span>
                        <span className="science title">Science</span>
                    {/*</div>
                </span>*/}
                <span className="action title">Action</span>
            </div>
            {itemList}
        </div>
    )
}


export default TodoList;