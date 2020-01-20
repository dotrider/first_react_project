import React, {Component} from 'react';

export default class ClassComponent extends Component {

    constructor(){
        super()
        this.state = {
            number: 0,
            friends: [],
            userInput: ''
        }
    }

     displayThis = () => {
        return <h1>from my function inside my component</h1>    
    }

    add = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    subtract = () =>  {
        this.setState ({
            number: this.state.number - 1
        })
    }

    changeHandler = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    addfriend = (newFriend) => {
        this.setState({
            friends: [...this.state.friends, newFriend],
            userInput: ''
        })
    }

    render(){
        console.log(this.state)
        const {number, userInput, friends} = this.state
        const mappedFriends = friends.map((element) => {
            return <div>
                <span>{element}</span>
            </div>
        })

        return (
            <div className = 'class-container'>
                {this.displayThis()}
                 <div>{number}</div>
                 <button onClick = {() => this.add()}>Add</button>
                 <button onClick ={() => this.subtract()}>Subtract</button>
                 <input type = 'text' name = 'userInput' value = {userInput} onChange = { (event) => this.changeHandler(event.target.name, event.target.value)}/>
                 <span>Type in a friend</span>
                 <button onClick = {() => this.addfriend(userInput)}>Add Friend</button>
                 {mappedFriends}
            </div>
        )
    }
}