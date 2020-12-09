import './App.css';
import React, {Component} from 'react';
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/searchBox/SearchBox";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {
        const filteredMonsters = this.state.monsters.filter(monster =>
            monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters</h1>
                <SearchBox
                    placeholder="Monster Search"
                    handleChange={e => {this.setState({searchField: e.target.value})}}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
