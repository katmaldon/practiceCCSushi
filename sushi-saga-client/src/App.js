import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

    state = {

        sushiArray: [],
        wallet: 50,
        index: 0

    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then((sushi) => {
                this.setState({
                    sushiArray: sushi
                });
            });
    }


    // handleEat = (id, price) => {
    //     if (this.state.wallet >= price) {
    //         let newWallet = (wallet - price)
    //         let updatedSushiArr = this.state.sushiArray.map(sushiPOJO => {
    //             if (sushiPOJO.id === id) {
    //                 return { ...sushiArray }
    //             }
    //             else {
    //                 return sushiPOJO;
    //             }
    //         })
    //         this.setState({
    //             sushiArray: updatedSushiArr,
    //             wallet: newWallet
    //         })
    //     }

    // }

    handleMore = e => {
       this.setState({
           index: state.index + 4
       })
    }

    renderSushi = () => {
        return this.state.sushiArray.slice(this.state.index, this.state.index + 4)
    }

    render() {
        return (
            <div className="app">
                <SushiContainer
                    renderSushi={this.renderSushi()}
                    handleMore={this.handleMore}
                    //sshandleEat={this.handleEat}

                />
                <Table />
            </div>
        );
    }
}

export default App;
