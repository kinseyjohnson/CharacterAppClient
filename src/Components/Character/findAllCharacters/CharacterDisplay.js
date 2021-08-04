import React from 'react';
import { Table } from 'reactstrap'


const CharacterDisplay = (props) => {

    const tablestyle = {
        color: 'white',
    }

    const characterMapper = () => {
        return props.characters.map()
    }

    return(
        <div className="mainDiv">
        <Table style={tablestyle} striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Race</th>
                    <th>Background</th>
                    <th>Alignment</th>
                </tr>
            </thead>
            <tbody>
                <tr className='Name'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='Class'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='Race'>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}


export default CharacterDisplay;