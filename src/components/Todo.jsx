import React from 'react';
import {MyContext} from './MyContext'

class Todo extends React.PureComponent{

    state = { toDoList : ['play']}

    static getDerivedStateFromProps(nextProps,prevState){
        console.log('props',nextProps)
        console.log('state',prevState)

        return null

    }


    getSnapshotBeforeUpdate(prevProp,prevState){

        console.log('props',prevProp)
        console.log('state',prevState)

    }

    componentDidUpdate(){

    }

    renderList = ()=>{
        let arrayOfTodo = [];
        this.state.toDoList.forEach((value,index)=>{
            arrayOfTodo.push( this.getLi(value,index))
        })
    
        return arrayOfTodo;
    }

    removeToDoItem=(index)=>{

        this.state.toDoList.splice(index,1)
        this.setState({toDoList : this.state.toDoList,value : this.state.toDoList.length})


    }

    getLi = (name,index)=>{
            return <li>
                <div style={{display : 'flex'}}>
                {name} <button onClick={()=>{this.removeToDoItem(index)}} id={index}> X </button>
                </div>
            </li>
    }

    addToDo = ()=>{

        let value = document.getElementById('inputBox').value
        if(value){
            document.getElementById('inputBox').value = ''
            this.state.toDoList.push(value)
            this.setState({toDoList : this.state.toDoList,value : this.state.toDoList.length})
        }
        
    }

    render(){
        return ( 
            <div>
                {/* <div>
                <input id="inputBox"></input>
                <button onClick={this.addToDo}>ADD</button>
                </div>
                <div>
                    ToDoList : 
                    <ul>
                        {this.renderList()}
                    </ul>
                     
                </div> */}
                <div>
                    {JSON.stringify(this.context)}
                </div>
            </div>
         )
    }

}
Todo.contextType = MyContext;
export default Todo;