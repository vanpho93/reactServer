var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var Weather = React.createClass({
    getInitialState(){
      return {location: 'Miami', temp: 30};
    },
    onSearch(location){
      this.setState({location: location, temp: 23})
    },
    render() {
        return (
          <div>
            <h1>Weather</h1>
            <WeatherForm onSearch={this.onSearch}/>
            <WeatherMessage location={this.state.location} temp={this.state.temp}/>
          </div>
        );
    }
});
module.exports = Weather;
