import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    handleIncrement =habit =>{
        //state 오브젝트안에 있는 count를 증가 한뒤 state를 업데이트 해야함
        //this.state.count +=1;
        this.props.onIncrement(habit);
      };
      
      handleDecrement =habit =>{
          //state 오브젝트안에 있는 count를 증가 한뒤 state를 업데이트 해야함
          this.props.onDecrement(habit);
         };
      
      handleDelete = habit =>{
        this.props.onDelete(habit);
      };

      handleAdd = name =>{
          this.props.onAdd(name);
      }
      

    render() {
        return (
            <div className="habits">
            <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit =>(
                            <Habit 
                            key={habit.id} 
                            habit={habit}
                            count ={habit.count}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                            // onDelete = {(habit)=> {this.props.handleDelete(habit)}}//멤버를 따로 입력하지 않아도 된다
                            />
                        ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </div>
        );
    }
}

export default Habits;