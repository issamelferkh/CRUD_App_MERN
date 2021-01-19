import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { ListTodo } from './components/ListTodo'
import { CreateTodo } from './components/CreateTodo'
import { EditTodo } from './components/EditTodo'

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Todo</Link>
          </li>
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={ListTodo}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
    </Switch>
    </div>
  );
}

export default App;
