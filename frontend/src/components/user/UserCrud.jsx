import axios from 'axios'
import React from 'react'
import {Main} from '../templates/Main'
const headerProps= { 
    icon:'users',
    title:'Usuários',
    subtitle:'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const url ='http://localhost:3001/users'
const initialState = {
user: {name:'', email:''},
list:[]
}

export  class UserCrud extends React.Component {
    state = {...initialState}

   
    componentWillMount() {
        axios(url).then(resp => {
            this.setState({list:resp.data})
        })
    }

    clear() {
        this.setState({user:initialState})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const urlBase = user.id ? `${url}/${user.id}`:url
        axios[method](urlBase, user)
        .then(resp => {
            const lista = this.getUpdatedList(resp.data)
            this.setState({user:initialState.user, lista})
        })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.push(user)
        return list
    }

    updateFild(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    rederForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input 
                            type="text" 
                            className='form-control' 
                            name='name'
                            value={this.state.user.name}
                            placeholder='Digite o nome' 
                            onChange={e => this.updateFild(e)} />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                            type="email" 
                            className='form-control' 
                            name='email'
                            value={this.state.user.email}
                            placeholder='Digite o email' 
                            onChange={e => this.updateFild(e)} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end gap-2">
                    <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                    <button className="btn btn-secondary" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({user})
    }

    remove(user){
        axios.delete(`${url}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className='d-flex gap-2'>
                        <button className="btn btn-warning" onClick={()=> this.load(user)}>
                            <i className='
                            fa fa-pencil'></i>
                        </button>
                        <button className="btn btn-danger" onClick={()=> this.remove(user)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.rederForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
      
