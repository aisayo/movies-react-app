import React, { Component } from 'react';



class NewMovieForm extends Component {
    constructor(){
        super()


        this.state = {
            title: '',
            release_date: '',
            category: ''
        }
    }

    updateTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    updateReleaseDate = (e) => {
        this.setState({
            release_date: e.target.value
        })
    }

    updateCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }


    submitMovie = (e) => {
        e.preventDefault()
        this.props.createMovie(this.state)
        this.setState({
            title: '',
            release_date: '',
            category: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitMovie}>
                    <label>Title:</label>
                    <input 
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />

                    <br/>

                    <label>Release Date:</label>
                    <input 
                        value={this.state.release_date}
                        onChange={this.updateReleaseDate}
                    />

                    <br/>

                    <label>Category:</label>
                    <input 
                        value={this.state.category}
                        onChange={this.updateCategory}
                    />

                    <br/>

                    <input type="submit" value="Create Movie"/>
                </form>
            </div>
        )
    }
}


export default NewMovieForm;