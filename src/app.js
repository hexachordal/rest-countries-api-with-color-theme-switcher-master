'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            flag: "",
            name: "",
            population: ""
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json,
                    flag: json[0].flag,
                    name: json[0].name,
                    population: json[0].population
                });
            })
            .catch(error => console.log("parsed error", error));
    }



    render() {
        const cArray = []
        for (const [key, value] of Object.entries(this.state.data)) {
            cArray.push(value);
        }


        const countries = cArray.map((country) =>
            <div id="country">
                <img class="flag" src={country.flag} />                      <h2>{country.name}</h2>
                <p>{country.population}</p>
            </div>)
        return <div className="card">
            {countries}
        </div>;
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
