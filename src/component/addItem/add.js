import React, {Component} from 'react';
import './add.css';


class AddList extends Component {

    state = {
        name : '',
        age : ''
    };

    handleChange= (e) => {
        this.setState ({
            [e.target.id] : e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        e.currentTarget.reset();
       /* this.setState ({
            name: '',
            age: ''
        })*/
    };




    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name" id="name" onChange={this.handleChange} /*value={this.state.name}*/ required />
                    <input type="number" placeholder="Enter age" id="age" onChange={this.handleChange} /*value={this.state.age}*/ required />
                    <input type="submit" value= "Add"/>

                </form>
            </div>
        )
    }
}

export default AddList;