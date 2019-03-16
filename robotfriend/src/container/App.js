import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import Scroll from '../components/Scroll.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Reset from '../Reset';
import ErrorBoundary from '../components/ErrorBoundary'


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}))
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading ...</h1>
        }   
        else{
            return (
                <div className='tc'>
                    
                    <h1 className='f1'>Robo friends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Reset/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>   
            );
        }   
    } 
}

export default App;