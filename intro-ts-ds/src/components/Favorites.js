import React, { Component } from 'react';

class Favorites extends Component {
    render() {
        return (
            <div>
                <table style={{backgroundColor: '#42daf5'}}>
                    <tr>
                        <th>Tameka's Top 5 Shows</th>
                        <th>Dustin's Top 5 Shows</th>   
                    </tr>
                    <tr>
                        <td>Brickleberry</td>
                        <td>Breaking Bad</td>
                    </tr>
                    <tr>
                        <td>Atlanta</td>
                        <td>Stargate</td>
                    </tr>
                    <tr>
                        <td>South Park</td>
                        <td>Star Trek</td>
                    </tr>
                    <tr>
                        <td>House of Lies</td>
                        <td>House of Cards</td>
                    </tr>
                    <tr>
                        <td>Martin</td>
                        <td>Blacklist</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Favorites;