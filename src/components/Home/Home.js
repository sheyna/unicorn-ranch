import React, {Component} from "react";
import style from './Home.module.scss';
import UnicornLocationMarker from '../UnicornLocationMarker/UnicornLocationMarker';

class Home extends Component {
    constructor() {
        super();
        this.state ={
            unicorns: [
                {
                    name: "Purple",
                    location: "Barn"
                },
                {
                    name: "Orange",
                    location: "Barn"
                },
                {
                    name: "Green",
                    location: "Barn"
                },
                {
                    name: "Pink",
                    location: "Barn"
                }
            ]
        }
    }

   findIndex = (idName) => {
        const {unicorns} = this.state;
        for(let i = 0; i < this.state.unicorns.length; i += 1) {
            if(unicorns[i].name === idName) {
                return i;
            }
        }
    }

    moveUnicorn = (e, idName) => {
        let {unicorns} = this.state;
        let updateUnicorns = [...unicorns];
        let index = this.findIndex(idName);
        let corn = this.state.unicorns.filter( uni =>  {
            return uni.name === idName;
        })
        corn[0].location = e.target.value;
        updateUnicorns[index] = corn[0];
        this.setState({
            unicorns: updateUnicorns
        })
    }

    render() {

        const unicorns = this.state.unicorns;
        let barn = [], pasture =[], trails = [], unK= [];
        unicorns.forEach( uni => {
            if (uni.location === "Barn") {
                barn.push(uni);
            } else if (uni.location === "Pasture") {
                pasture.push(uni);
            } else if (uni.location === "Trails") {
                trails.push(uni);
            } else {
                unK.push(uni);
            }
        });

        return (
            <div>
                <header><h1>Unicorns!</h1></header>
                <main>
                    <h2>
                        Locations:
                    </h2>
                    <ul className={style.horseLocations}>
                        <li>Barn
                            <ul>
                                {barn.map((unic, idx) => {
                                    return (
                                        <UnicornLocationMarker
                                            unic={unic}
                                            moveUnicorn={this.moveUnicorn}
                                            key={idx}
                                        />
                                    )
                                })}
                            </ul>
                        </li>
                        <li>Pasture
                            <ul>
                                {pasture.map((unic, idx) => {
                                    return (
                                        <UnicornLocationMarker
                                            unic={unic}
                                            moveUnicorn={this.moveUnicorn}
                                            key={idx}
                                        />
                                    )
                                })}
                            </ul>
                        </li>
                        <li>Trails
                            <ul>
                                {trails.map((unic, idx) => {
                                    return (
                                        <UnicornLocationMarker
                                            unic={unic}
                                            moveUnicorn={this.moveUnicorn}
                                            key={idx}
                                        />
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                </main>
            </div>
        )
    }
}

export default Home;
