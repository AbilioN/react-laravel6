import { App } from '@inertiajs/inertia-react';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { InertiaApp, InertiaLink} from '@inertiajs/inertia-react';


export default function Teste(props)
{
    return(
        <div>
            <Navbar nome={props.nome} sobrenome={props.sobrenome}>

            </Navbar>

            <InertiaLink href={route('index')} replace> <h1>Home</h1></InertiaLink>
                        <InertiaLink href={route('teste')} replace> <h1>Teste</h1></InertiaLink>
        </div>
    )
}