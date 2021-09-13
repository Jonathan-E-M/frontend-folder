import React, { Component } from 'react';
import Component1 from '../functional/component1';

class Contanier1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateprop1: 'our initial state',
            stateprop2: 5,
            value: '',
        }
        //this will need to bind in constructor to work
        this.handleSubmit2 = this.handleSubmit2.bind(this)

    }
    //wrong:
    changeState = () => (
        this.state.stateprop1 = 'New State'
    )

    //correct:
    changeStateCorrect = () => (
        this.setState(
            (prevState, props) => ({
                stateprop2: prevState.stateprop2 + 1,
                stateprop1: this.state.stateprop1 + 'l'
                //bellow will work too:
                // stateprop2: this.state.stateprop2 + 1
            })
        )
    )
    changeStateCorrect2 = () => (
        this.setState(
            (prevState, props) => ({
                stateprop1: this.state.stateprop1 + 'l'
            })
        )
    )
    /*
    <div>
                
                <button onClick={() => this.changeStateCorrect()}> Change state correct method</button>
                <button onClick={() => this.changeStateCorrect2()}> Change stateprop1</button>
                <br/>
                <Component1 prop1={this.state.stateprop1} />
                <br/>

                {this.state.stateprop2}
                <br/>
                {this.state.stateprop1}

            </div>
    */
    Arr1 = [
        { id: 1, text: "text 1", number: 1 },
        { id: 2, text: "text 2", number: 2 },
        { id: 3, text: "text 3", number: 3 },
        { id: 4, text: "text 4", number: 4 },
        { id: 5, text: "text 5", number: 5 },
    ]

    renderListItems = (props) => (
        <div>
            {props.item.text}
            <p>{props.item.number}</p>

        </div>
        //{this.Arr1.map((item, index) => (<this.renderListItems key={index} item={item}/>))}
    )
    handelChange = (event) => (
        this.setState({
            value: event.target.value
        })

    )
    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.value)
    }
    //this will need to bind in constructor to work
    handleSubmit2 (event) {
        event.preventDefault()
        console.log(this.state.value)
    }
        

    
    

    render() {
        return (
            <div>
                {this.state.value}
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input id='name' onChange= {this.handelChange} type='text' />
                    <button type='submit'> Submit</button>
                </form>




            </div>
        );
    }
}
export default Contanier1;