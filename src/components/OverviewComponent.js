import React, { Component }  from 'react';

class Overview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="col">Overview</h3>
                        <img src="assets/img/set-up2.jpg"/>
                        <br />
                        <br />
                        <p className="col">
                            Mahjong is a popular 4-player gambling game enjoyed all over the world. The basic premise and goal of the game is to create a winning hand, either by drawing the necessary tiles from the wall (basically the deck) or by claiming the discards of your opponents. There are various types of winning hands, with rarer hands being worth more "points" known as faan, which determines how much money the winner gets from the losers. There are many different regional variations of Mahjong, and while they all share the same basic premise, each one has its own set of rules and possible winning hands. This website will focus solely on Hong Kong style Mahjong, arguably the most popular variation played.                   
                        </p>
                        <h5 className="col">The Tiles</h5>
                        <p className="col">
                            A Mahjong set consists of 144 tiles, with 4 copies of each tile. There are 3 suits with tiles numbered 1 through 9 of each suit. The suits are known as Dots, Bamboo, and Cracks (or characters, as they contain the Chinese characters for 1 through 9). There are 7 types of honor tiles; 4 of them consist of the Chinese character for East, South, West, and North, and the other 3 are known as the Red, Green, and White Dragons. All of the previously mentioned tiles have 4 copies each, however there are an additional 8 unique special tiles of which there is only 1 copy. These are the seasons and flowers, which are each numbered 1 through 4. Some variations of Mahjong don't use these flowers, but Hong Kong style does. See below for the full tiles list.  
                        </p>
                        
                        <h5 className="col">Goal of the Game</h5>
                        <p className="col">
                            The goal of the game is to create a hand consisting of 4 "melds" or sets, as well as a pair. There are 3 types of melds, which are called Chows (or straights), Pungs (three-of-a-kind), and Kungs (four-of-a-kind). A chow consists of 3 tiles of sequential numbers of the same suit. A pung consists of 3 of the same tile. A kung consists of 4 of the same tile. A winning hand must contain 4 of these melds as well as a pair of any tile. Therefore, a winning hand will usually contain 14 total tiles, but can be more if the player has any kungs. As soon as any player completes their hand, the game ends and the faan or point value of the winning hand is used to determine how much is paid to the winner. 
                        </p>           
                    </div>
                </div>
            </div>
            </React.Fragment>
            );
    }

}
export default Overview;