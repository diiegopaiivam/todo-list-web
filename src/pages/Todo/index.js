import React, { Component } from 'react';
import Pageheader from './../Templates/Pageheader/index';
import TodoForm from './../TodoForm/index';
import TodoList from './../TodoList/index';
import api from './../../services/api';

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            description: '', list: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkIsDone = this.handleMarkIsDone.bind(this);
        this.handleMarkIsPending = this.handleMarkIsPending.bind(this);
        this.handleClean = this.handleClean.bind(this);

        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}` : '' ;
        api.get(`/${search}`)
          .then(response => this.setState({
              ...this.state, description: '', list: response.data
          })
        )        
    }

    handleSearch(){
        this.refresh(this.state.description);
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        api.post('/todo', {description})
            .then(response => this.refresh());
    }

    handleRemove(todo){
        api.delete(`/todo/${todo._id}`)
        .then(response => this.refresh())
    }

    handleMarkIsDone(todo){
        api.put(`/todo/${todo._id}`, {...todo, done: true})
            .then(response => this.refresh())
    }

    handleMarkIsPending(todo){
        api.put(`/todo/${todo._id}`, {...todo, done: false})
            .then(response => this.refresh())
    }

    handleClean(){
        this.refresh()
    }


    render(){
        return(
            <div>
                <Pageheader name="Tarefas" small="Cadastro"></Pageheader>
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}                
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClean={this.handleClean} 
                />
                <TodoList 
                    list={this.state.list}
                    handleMarkIsDone={this.handleMarkIsDone}
                    handleMarkIsPending={this.handleMarkIsPending}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}