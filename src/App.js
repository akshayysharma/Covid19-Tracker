import React, { Component } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covidImage from "./image/covid.png";
import Footer from "./components/Footer/Footer";
import { Link } from "@material-ui/core";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Link
          href="https://github.com/akshayysharma/Covid19-Tracker"
          target="_blank"
          className={styles.githubLink}
        >
          <img
            width="149"
            height="149"
            src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149"
            class="attachment-full size-full"
            alt="Fork me on GitHub"
            data-recalc-dims="1"
          />
        </Link>
        <img className={styles.image} src={covidImage} alt="COVID-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Charts data={data} country={country} />
        <Footer />
      </div>
    );
  }
}
