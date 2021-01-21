import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Navbar = (props)=> {
    return (
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{props.nome}</div>

                        <div className="card-body">{props.sobrenome}</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
