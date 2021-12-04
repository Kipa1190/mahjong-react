import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TableHand extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

<React.Fragment>
<Table>
<div className="container">
        <div className="row">
            <div className="col">
                <h3>Scoring Table</h3>
                <p className="col">Below is a table of every type of winning hand and its faan point value.</p>
                <table className="col">
                    <tr>
                        <th>Value</th>
                        <th>Hand</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>No Flowers or Seasons</td>
                        <td>Hand contains no flowers or seasons.</td>
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>Seat Flower</td>
                        <td>Hand contains flower corresponding to the player's seat.</td> 
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>Seat Season</td>
                        <td>Hand contains season corresponding to the player's seat.</td> 
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>All Chows</td>
                        <td>Hand contains only chow melds.</td> 
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>Dragon Pung</td>
                        <td>Hand contains a pong or kung of any dragons.</td> 
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>Seat/Round Wind</td>
                        <td>Hand contains a pung or kung of the player's seat wind or the round wind.</td> 
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>Self-drawn Win</td>
                        <td>Win by drawing a tile from the wall.</td> 
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>Last Tile Draw</td>
                        <td>Win by drawing the last tile of the wall.</td> 
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>Last Tile Discard</td>
                        <td>Win by claiming the last discard after the last tile of the wall is drawn.</td> 
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>Robbing the Kung</td>
                        <td>Win by stealing a tile that a player tries to convert their melded pung to a kung.</td> 
                    </tr>
                    <tr>
                        <td>1 Faan</td>
                        <td>Out on Replacement</td>
                        <td>Win by drawing a replacement tile after declaring a kung. Counts as self-drawn.</td> 
                    </tr>
                    <tr>
                        <td>2 Faan</td>
                        <td>All Flowers</td>
                        <td>Hand contains all 4 flowers. Implies seat flower.</td> 
                    </tr>
                    <tr>
                        <td>2 Faan</td>
                        <td>All Seasons</td>
                        <td>Hand contains all 4 seasons. Implies seat season.</td> 
                    </tr>
                    <tr>
                        <td>3 Faan</td>
                        <td>All Pung</td>
                        <td>Hand consist of all pungs.</td> 
                    </tr>
                    <tr>
                        <td>3 Faan</td>
                        <td>Half Flush</td>
                        <td>Hand consists of only honor tiles and tiles of one suit.</td> 
                    </tr>
                    <tr>
                        <td>4 Faan</td>
                        <td>Little Three Dragons</td>
                        <td>Hand contains 2 dragon pungs and a pair of the third dragon.</td> 
                    </tr>
                    <tr>
                        <td>4 Faan</td>
                        <td>Seven Pairs</td>
                        <td>Hand is composed of 7 pairs rather than 4 melds.</td> 
                    </tr>
                    <tr>
                        <td>6 Faan</td>
                        <td>Full Flush</td>
                        <td>Hand consists of all suit tiles of one suit.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Four Concealed Pungs</td>
                        <td>Hand contains 4 self-drawn pungs and the final tile is also self-drawn.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Big Three Dragons</td>
                        <td>Hand contains 3 dragon pungs.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Little Four Winds</td>
                        <td>Hand contains 3 wind pungs and a pair of the fourth wind.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Big Four Winds</td>
                        <td>Hand contains 4 wind pungs.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>All Honors</td>
                        <td>Hand consists of only honor tiles.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>All Terminals</td>
                        <td>Hand consists of only terminals (suited tiles number 1 and 9).</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Nine Gates</td>
                        <td>Concealed hand consisting of suited tiles numbered 1112345678999 of the suit and one additional tile of the same suit.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Thirteen Orphans</td>
                        <td>Hand consisting of 1 of every terminal and honor and one additional copy of any of those as a pair.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>All Kungs</td>
                        <td>Hand has 4 kungs and a pair.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Jade Dragon</td>
                        <td>Hand is composed of all pungs or kungs of bamboo tiles as well as a pung of green dragons.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Ruby Dragon</td>
                        <td>Hand is composed of all pungs or kungs of character tiles as well as a pung of red dragons.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Pearl Dragon</td>
                        <td>Hand is composed of all pungs or kungs of dot tiles as well as a pung of white dragons.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Blessing of Heaven</td>
                        <td>East wind player wins with the initially drawn hand.</td> 
                    </tr>
                    <tr>
                        <td>Limit</td>
                        <td>Blessing of Earth</td>
                        <td>Any player other than the East wind player wins by claiming the first discard of the game.</td> 
                    </tr>
                </table>
            </div>
        </div>
    </div>
    </Table>
    </React.Fragment>
        );
    }
}

export default TableHand;