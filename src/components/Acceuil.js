import React from 'react'
import './Accueil.css'
import { Routes, Route } from 'react-router-dom'
import ListUser from './ListeUser';
import DetailUser from './DetailUser';
import ListeToDo from './ListeToDo';
export default function Accueil() {
    return (
        <div>
            <div className='Head'>Gestion des taches</div>
            <Routes>
                <Route exact path="/" component={<ListUser />} />
                <Route path='/DetailUser/:id' component={<DetailUser />} />
                <Route path='/ListeToDo/:id' component={<ListeToDo/>} />
            </Routes>
        </div>
    )
}