import React, { Component }  from 'react';
import sets from '../assets/img/sets.jpg';
import { Table } from 'reactstrap';

class End extends Component {
    constructor(props) {
        super(props);

    }

    render (){
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col" id="list-endGame">            
                        <h3 className="col" id="end">Ending the Game</h3>                            
                        <p className="col">
                            The game ends when either a player is able to complete a winning hand, or there are no more tiles on any walls to draw from, which results in a draw. If the East wind player wins the game, they will remain the East wind for the next game as well and roll the die again. If any other player wins, or the game ends in a draw, the next player to the right becomes East wind for the next round and all the wind seats change accordingly. Note that if the East player does not win, the next East wind seat will always be the player to the right, regardless if that player won or not. Since the East wind player stays as East for winning, round winds may last longer than 4 games since it only changes once the East wind goes all the way around the table.
                        </p>
                        <br/>
                        <img src={sets}/>
                        <br/>
                        <h5 className="col">Winning Hands</h5>
                        <div className="col">   
                        
                        </div>
                        <p className="col">
                            A winning hand consists of 4 melds and a pair of any tile. There are 2 exceptions to this general hand structure, which are special hands called Thirteen Orphans and Nine Gates. These hands are extremely rare and are worth the maximum faan if a player is able to complete them. There may also be a set minimum faan that a hand must be worth in order to be able to claim victory. The standard minimum faan is usually 3 faan, but it is up to the players to decide how much the minimum should be. Check out the Scoring Table page for a full list of winning hands and their faan value.
                        </p>
                        <p className="col">
                            There is another notable hand that is worth 0 faan by itself. This hand is known as the Chicken Hand and consists of a mix of Pungs and Chows of 2 or more suits. Players are usually unable to claim victory with such a hand as the faan value is too low. Chows and Pungs may be mixed if they are all the same suit, which is a flush. Mixing Chows and Pungs as well as suits results in the Chicken Hand. 
                        </p>
                        <h5 className="col">Points and Paying Out</h5>
                        <p className="col">
                            Once the faan value of the winning hand is determined, a points system may be used to determine how much money should be paid out. The exact amount of money that each point is worth is arbitrary and is to be established by the players. If the winning tile was a claimed discard, the discarder pays double the value of the hand, while the other players pay the normal value. If the winning tile was self-drawn from the wall, all players pay double to the winner. See below for a faan to points conversion:
                        </p>
                        <Table>
                            
                            <tr>
                                <th>Faan</th>
                                <th>Points</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>4, 5, 6</td>
                                <td>16</td>
                            </tr>
                            <tr>
                                <td>7, 8, 9</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td>10+</td>
                                <td>64</td>
                            </tr>
                        </Table>
                        <br />
                        
                    </div>
            </div>
        </div>
            </React.Fragment>
        );
    }

}
export default End;