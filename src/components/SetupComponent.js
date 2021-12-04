import React, { Component }  from 'react';

class Setup extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col" id="list-set-up" role="tabpanel" aria-labelledby="list-set-up-list">
                            <h3 className="col" id="set-up">Set Up</h3>
                            <p className="col">
                                The game begins with all the tiles face down on the table to be shuffled. This is done by simply having all players push the tiles around to mix them up. After shuffling, each player builds a wall containing 36 tiles by lining up 18 tiles and then stacking another layer on top of that. These walls are then brought together to create a square and will be drawn from later on.
                            </p>
                            <div className="col">
                            <img src="assets/img/wall.jpg" className="img-fluid" alt="wall" />
                            </div>
                            <br />
                            <h5 className="col">Rolling Dice and Winds</h5>
                            <p className="col">
                                After the walls have been set up, one player will then roll 3 six-sided die. The player who rolls the die is considered the East Wind seat and will be the first to draw tiles as well as the first player to take their turn. Likewise, every other player will also be considered a certain wind seat. Going counter-clockwise, the second player is the South wind, the third player is the West wind, and the fourth player is the North wind. If a winning player manages to create a pung or kung meld of their specific seat wind, they will gain an additional faan. After a game is completed, the next person going counter-clockwise rolls the dice for the next game, and the seat winds change accordingly. In addition to seat winds, there is also a round wind, which each round consisting of a minimum of 4 games until the dice has gone all the way around the table and the first East player becomes East again. The first round wind is always East as well, and will change to South, West, then North as rounds are completed. Similar to seat winds, creating a pung or kung meld of the round wind will also award an additional faan.
                            </p>
                            <h5 className="col">Drawing Tiles</h5>
                            <p className="col">
                                After the three die have been rolled, the total of the rolls are added up. The walls are then counted <b>counter-clockwise</b> starting with the dice roller. For example, if the rolls added up to 3, the count would land on the player or wall directly opposite the roller, since the roller is 1, the player to the right is 2, and the opposite player would then be 3. If the rolls add up to 5, the count would land back on the roller in the same fashion and so on. On the wall that the count lands on, tiles on the top row are then counted going <b>clockwise</b> using the same total from the dice roll. The East wind player will then draw the first block of 4 tiles after counting, with the counted tiles being skipped. Going counter-clockwise, each player will likewise draw the next block of 4 tiles, going around the table 3 times until each player has 12 tiles. Then in the same order, each player will draw 1 additional tile to create a starting hand of 13. The East wind player then draws another additional tile since they will be the first to act. At the beginning of each turn, the player will draw from the same end of the wall as the initial draw. 
                            </p>
                            <h5 className="col">Flowers and Seasons</h5>
                            <p className="col">
                                If any player has any of the 8 special flower or season tiles in their starting hand, they must reveal it immediately and put it aside. Then, the player must draw a new tile to replace it from the back end of the wall (the side that was skipped when counting for the initial draw). The East player draws their replacement tile first, then the other players going counter-clockwise order. If a player has more than one flower or season, they are to draw that many replacement tiles all at once. The same is done if a player draws a flower or season tile from the wall when they take their turn.
                            </p>
                            <p className="col">
                                Flowers and Season tiles also have the potential to grant additional faan to the winning player. There are 4 flower and 4 season tiles, numbered 1 through 4. With the East player as seat number 1, and counting up going counter-clockwise, if the winning player possesses their corresponding numbered flower or season, they will gain an additional faan. Also, if the winning player has no flower or season tiles at all, that will also grant an additional faan.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            );
    }

}
export default Setup;