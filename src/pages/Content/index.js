// import { printLine } from './modules/print';

// console.log('Content script works!');
// console.log('Must reload extension for modifications to take effect.');
// console.log('trying to modify gmail')

// printLine("Using the 'printLine' function from the Print Module");

// var div = document.createElement( 'div' );
// var btnForm = document.createElement( 'form' );
// var btn = document.createElement( 'input' );

// //append all elements
// document.body.appendChild( div );
// div.appendChild( btnForm );
// btnForm.appendChild( btn );
// //set attributes for div
// div.id = 'myDivId';
// div.style.position = 'fixed';
// div.style.top = '50%';
// div.style.left = '50%';
// div.style.width = '100px';   
// div.style.height = '100px';
// div.style.backgroundColor = 'red';

// //set attributes for btnForm
// btnForm.action = '';

// //set attributes for btn
// //"btn.removeAttribute( 'style' );
// btn.type = 'button';
// btn.value = 'hello';
// btn.style.position = 'absolute';
// btn.style.top = '50%';
// btn.style.left = '50%';

import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";

class Main extends React.Component {
    render() {
        return (
            <div className={'my-extension'}>
                <h1>Hello world - My first Extension</h1>
            </div>
        )
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);