import React from 'react';


class Counter extends React.Component {

    state = {
        counter1: 0,
        counter2: 0,
    }
    onClickAdd = () => {
        this.setState({
                counter1: this.state.counter1 + 1,
        })
    };

    onClickDown = () => {
        this.setState({
                counter1: this.state.counter1 - 1,

        })
    };
    onClickReset = () => {
        this.setState({
                counter1: 0

        })
    };
    onClickAdd2 = () => {
        this.setState({
                counter2: this.state.counter2 + 1,

        })
    };

    onClickDown2 = () => {
        this.setState({
                counter2: this.state.counter2 - 1,

        })
    };
    onClickReset2 = () => {
        this.setState({
                counter2: 0

        })
    };

    render() {
        return (
            <div>
                <div>
                    CounterA{" "}
                    {this.state.counter1}{" "}
                    <button onClick={this.onClickDown}>-1</button>{" "}
                    <button onClick={this.onClickAdd}>+1</button>{" "}
                    <button onClick={this.onClickReset}>Reset</button>
                </div>
                <div>
                    CounterB{" "}
                    {this.state.counter2}{" "}
                    <button onClick={this.onClickDown2}>-1</button>{" "}
                    <button onClick={this.onClickAdd2}>+1</button>{" "}
                    <button onClick={this.onClickReset2}>Reset</button>
                </div>

            </div>

        )
    }
}


export default Counter;
