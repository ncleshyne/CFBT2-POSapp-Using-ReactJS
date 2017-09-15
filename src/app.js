import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        < CoffeeClass />
    );
  }
}
class Foods extends Component {

  constructor(props) {
    super(props);
    this.state = {foodList : [
      {name: "The Buddha Jumps Over the Wall soup", price: 143, image: require("./img/buddha.jpg"), details: "The soup or stew consists of many ingredients, especially animal products, and requires one to two full days to prepare. A typical recipe requires many ingredients including quail eggs, bamboo shoots, scallops, sea cucumber, abalone, shark fin, fish maw, chicken, Jinhua ham, pork tendon, ginseng, mushrooms, and taro."},
      {name: "The Fleurburger 5000", price: 5000, image: require("./img/burger.jpeg"), details: "The most expensive burger in the world. This tasty piece of culinary jewelry contains Wagyu beef, foie gras, shaved black truffles and truffle sauce. It’s served on a brioche truffle bun."},
      {name: "Golden Phoenix Cupcake", price: 1010, image: require("./img/choco.jpg"), details: "Dubai's 'Golden Phoenix cupcake' adorned with 23-carat edible gold sheets in its Italian chocolate, vanilla beans and strawberries dipped in edible gold is the world's most expensive cupcake. Served on a covered Villari 24-carat gold empire cake stand, the 'Golden Phoenix' is baked using premium Ugandan vanilla beans and first class Amedei Porcelana chocolate."},
      {name: "Samundari Khazana curry", price: 3200, image: require("./img/currry.jpg"), details: "The Samundari Khazana curry, meaning Seafood Treasure, is a mix of caviar, sea snails, a whole lobster and even edible gold. The posh nosh is being served up at upmarket London eatery Bombay Brasserie."},
      {name: "The Zillion Dollar Lobster Frittata", price: 1000, image: require("./img/frittata.jpg"), details: "The most expensive omelette commercially available is the Zillion Dollar Lobster Frittata which costs $1,000 (£528.90) and is featured on the menu at Norma’s restaurant, Le Parker Meridien Hotel, New York, USA. The frittata contains 10 oz (280 g) caviar and approximately 1 lb (0.45 kg) lobster which is covered with egg on a bed of fried potatoes. Le Parker Meridien also feature a smaller, less expensive version called the ‘regular frittata’ that costs $100 (£54)."},
      {name: "Bagel from Westin Hotel, New York", price: 1000, image: require("./img/donut.jpg"), details: "The pricey bagel, that is topped with white truffle cream cheese and goji berry infused Riesling jelly with golden leaves, joins a list of $1,000 delicacies in Manhattan that includes an ice-cream sundae topped with a 23-karat edible gold leaf and a pizza topped with six kinds of caviar and lobster."}] ,
      foodQty: 0, foodTotal: 0 };
    this.changeTotal = this.changeTotal.bind(this);
  }

  changeTotal(price) {
    this.setState({coffeeTotal: this.state.foodTotal + price});
  }

  render() {
    var that = this;
    var foodList = this.state.foodList.map(function(foodList) {
      return(
        <Food name={foodList.name} details={foodList.details} price={coffeeType.price}  handleChange={that.changeTotal}/>
      );
    });

    return(
      <div className="container">
      {foodList}
      <Summary coffeeTotal={this.state.foodTotal}/>
      </div>
    );
  }
}
class Summary extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-bottom" id="fixedbottom">
          <div className="col-xs-12 col-md-9" id="cupdiv">
          <h3 id="cup">CALLE UNO POURS</h3>
          </div>
          <div className="col-xs-12 col-md-3" id="totaldiv">
          <h3 id="total">TOTAL: {this.props.foodTotal}</h3>
          </div>
      </div>
    )
  }
}
class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {foodQty:0, foodTotal: 0};
    this.moreQty = this.moreQty.bind(this);
    this.lessQty = this.lessQty.bind(this);
  }
    moreQty() {
      this.setState({foodQty: this.state.foodQty + 1});
      this.props.handleChange(this.props.price);
    }
    lessQty() {
      this.setState({foodQty: this.state.foodQty - 1});
      this.props.handleChange(-this.props.price);
      if (this.state.foodQty < 0)
      return alert("Error! Orders can't be less than 0");
    }

  render() {
    var foods = this.state.foodList.map(function(food){
      return (
        <div className="col-xs-12 col-md-3">
        <br/>
            <img src={food.image} className="image-box img-responsive" style={{width:"100%"}}/>
            <h4>{this.props.name}, P{this.props.price} per meal</h4>
            <p>{this.props.details}</p>
        <br/>
            <h5>{this.state.foodQty} orders of {this.props.name}</h5>
            <button onClick = {this.moreQty} id="buttonqty"> + </button> &nbsp;
            <button onClick = {this.lessQty} id="buttonqty"> - </button>
        </div>
        );
  }
}

export default Foods;
