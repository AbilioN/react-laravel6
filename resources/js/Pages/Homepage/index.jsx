import { App } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';
import { InertiaApp, InertiaLink} from '@inertiajs/inertia-react';


export default function Homepage()
{
    return(
        <div>
            <h1>Homepage</h1>
            <InertiaLink href={route('index')} replace> <h1>Home</h1></InertiaLink>
            <InertiaLink href={route('teste')} replace> <h1>Teste</h1></InertiaLink>
        </div>

        
    )
}