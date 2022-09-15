import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component{
  state={
      habits: [
          {id : 1, name :'Reading', count :0},
          {id : 2, name :'Running', count :0},
          {id : 3, name :'Coding', count :0}
      ],
  };

   
  handleIncrement = habit =>{
    const habits = this.state.habits.map(item =>{
      if(item.id=== habit.id){
        return{...habit, count: habit.count+1 };
      }
      return item;
    });
    this.setState( {habits});
    //state 오브젝트안에 있는 count를 증가 한뒤 state를 업데이트 해야함
    //this.state.count +=1;
  };
  
  handleDecrement = habit =>{
      //state 오브젝트안에 있는 count를 증가 한뒤 state를 업데이트 해야함
      const habits =[...this.state.habits];
      const index = habits.indexOf(habit);
      const count = habits[index].count - 1;
      habits[index].count = count <0 ? 0 : count;
      this.setState({habits});
     };
  
  handleDelete = habit =>{
    console.log(`handleDelete ${habit}`);
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  handleAdd = name =>{
    const habits =[...this.state.habits, {id: Date.now(), name : name, count :0}];
    this.setState({habits });
  };

  handleReset = () =>{
    //habits라는 새로운 배열을 만들고 
    const habits = this.state.habits.map(habit =>{
      habit.count=0;
      if(habit.count !==0){
        return{...habit, count:0};
      }
      return habit;
    });
    this.setState({habits });
  }

  render(){
    return(
      <>
            <Navbar 
              totalCount={this.state.habits.filter(item => item.count >0).length} 
            />
            <Habits 
              habits={this.state.habits}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete = {this.handleDelete}
              onAdd={this.handleAdd}
              onReset ={this.handleReset}
              />
        </>
        );  
      }
}

export default App;
