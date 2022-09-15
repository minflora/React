import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    
componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
}
componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will mount`);
}
handleIncrement =(event) =>{
  //state 오브젝트안에 있는 count를 증가 한뒤 state를 업데이트 해야함
  //this.state.count +=1;
    this.props.onIncrement(this.props.habit);
  
};

handleDecrement =(event) =>{
    //state 오브젝트안에 있는 count를 증가 한뒤 state를 업데이트 해야함
    this.props.onDecrement(this.props.habit);
   };

handleDelete =(event)=>{
    this.props.onDelete(this.props.habit);
};

    render() {
        const {name} = this.props.habit;
        const {count} = this.props;
        console.log(`habit: ${name}`);
        return(
        <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
            <i className ="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
            <i className ="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
            <i className ="fas fa-trash"></i>
        </button>
        </li>
        );
    }
}

export default Habit;