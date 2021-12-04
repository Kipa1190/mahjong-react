import React, { Component }  from 'react';

class Turn extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col" id="list-turn-order">
                        <h3 className="col" id="turn-order">Turn Order and Turn Flow</h3>
                        <p className="col">
                            The East wind player is the first player to act. Since they drew 1 additional tile at the beginning, they will start by discarding 1 tile from their hand. Players must evaluate their starting hand to determine what type of winning hand to aim for, and discard their less useful tiles accordingly. Play then continues to the next player to the right, or counter-clockwise direction. On each turn, players may either claim the most recently discarded tile or draw 1 tile from the wall, then discard 1 tile from their hand.
                        </p>
                        <h5 className="col">Claiming Discarded Tiles</h5>
                        <p className="col">
                            Players may claim discarded tiles at the time it is discarded, but only if that tile would complete a meld for them. The player who claims a discard will then take their turn and discard a tile of their own without drawing from the wall. There are some restrictions to claiming discards, however. Chow melds (straights) completed through discard may only be claimed from the player to the left (the player that goes before them). In this case, turn order is not disrupted. Pung and Kung melds, however, may be claimed by any player at the time of the discard. The claimer then takes their turn by discarding, and any player that would have gone before them is skipped. After claiming a discard, the player must reveal the completed meld by placing the tiles face-up beside them on the table. As previously stated, discards may only be claimed at the time of the discard. Tiles in the discard pile from previous turns can no longer be claimed.
                        </p>
                        <p className="col">
                            In the case of Kung melds, since it is a meld of 4 tiles instead of 3, players would not be able to complete a 4-meld hand unless an extra tile is drawn. This is done by drawing a tile from the back end of the wall once a Kung has been melded. If a Kung meld is created naturally through draws, the player must still reveal the meld in order to draw the additional tile. 
                        </p>
                    </div>
                </div>
            </div>
            </React.Fragment>
            );
    }

}
export default Turn;