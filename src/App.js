import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import { data } from './Components/data';
import EditUser from './Components/edit';
import { NoPage } from './Components/NoPage';
import TeacherComponent from './Components/TeacherComponents';
import Teacher from './Components/TeacherDetails';

import UserComponent from './Components/UserComponent';
import { UserDetails } from './Components/UserDetails';
import BaseApp from './core/Base';



function App(){
  const [user,setUser]=useState(data);
  return(
    <div className='App'>
      <Switch>
        <Route exact path="/">
        <UserComponent
        user={user}
        setUser={setUser}/>
        </Route>
        <Route path="/teacher/details">
            <TeacherComponent
            user={user}
            setUser={setUser}/>
        </Route>
        <Route path="/add/user">
          <AddUser
          user={user}
          setUser={setUser}/>
        </Route>
        <Route path="/add/teacher">
          <Teacher
          user={user}
          setUser={setUser}/>
        </Route>

        <Route path="/user/:id">
            <UserDetails user={user}
            setUser={setUser}/>
        </Route>

        <Route path="/edit/:id">
             <EditUser user={user}
             setUser={setUser}/>
           
          </Route>

          
        
          <Route path="/users">
            <Redirect path="/"/>
          </Route>
          
           
        <Route path = "**">
         <NoPage/>
        </Route>
      </Switch>
      
    

    </div>
  )
}

export default App;