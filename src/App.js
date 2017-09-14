import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Product extends Component {
 constructor(props) {
   super(props);
   this.state = {qty:0};
   this.buy = this.buy.bind(this);
   this.show =this.show.bind(this);
   this.bawas =this.bawas.bind(this);
 }


 buy(){
   this.setState({qty: this.state.qty + 1});
   this.props.handleTotal(this.props.price);
 }


 show(){
   this.props.handleShow(this.props.details);
 }

bawas(){
   this.setState({qty: this.state.qty - 1});
   this.props.handleTotal(-this.props.price);
 }


 render() {
   return (
     <div>
         <p> {this.props.name} = ${this.props.price}</p>
         <p> <img src={this.props.image}/></p>
         <p>Quantity: {this.state.qty}</p>
         <button onClick={this.buy}>+</button>
         <button onClick={this.show}>Details</button>
         <button onClick={this.bawas}>-</button>
         <h3>${this.state.qty*this.props.price}</h3>

     </div>
   );
 }
}

class Total extends Component {
 render() {
   return (
     <div>
       <h3>Total balance: ${this.props.total} </h3>
     </div>
   );
 }
}



class ProductList extends Component {


constructor(props) {
 super(props);
 this.state={total:0,
     productList:
 [{name: "The Buddha Jumps Over the Wall soup", price: 143, image: require("./img/buddha.jpg"), details: "The soup or stew consists of many ingredients, especially animal products, and requires one to two full days to prepare. A typical recipe requires many ingredients including quail eggs, bamboo shoots, scallops, sea cucumber, abalone, shark fin, fish maw, chicken, Jinhua ham, pork tendon, ginseng, mushrooms, and taro."},
 {name: "The Fleurburger 5000", price: 5000, image: require("./img/burger.jpeg"), details: "The most expensive burger in the world. This tasty piece of culinary jewelry contains Wagyu beef, foie gras, shaved black truffles and truffle sauce. It’s served on a brioche truffle bun."},
 {name: "Golden Phoenix Cupcake", price: 1010, image: require("./img/choco.jpg"), details: "Dubai's 'Golden Phoenix cupcake' adorned with 23-carat edible gold sheets in its Italian chocolate, vanilla beans and strawberries dipped in edible gold is the world's most expensive cupcake. Served on a covered Villari 24-carat gold empire cake stand, the 'Golden Phoenix' is baked using premium Ugandan vanilla beans and first class Amedei Porcelana chocolate."},
 {name: "Samundari Khazana curry", price: 3200, image: require("./img/currry.jpg"), details: "The Samundari Khazana curry, meaning Seafood Treasure, is a mix of caviar, sea snails, a whole lobster and even edible gold. The posh nosh is being served up at upmarket London eatery Bombay Brasserie."},
 {name: "The Zillion Dollar Lobster Frittata", price: 1000, image: require("./img/frittata.jpg"), details: "The most expensive omelette commercially available is the Zillion Dollar Lobster Frittata which costs $1,000 (£528.90) and is featured on the menu at Norma’s restaurant, Le Parker Meridien Hotel, New York, USA. The frittata contains 10 oz (280 g) caviar and approximately 1 lb (0.45 kg) lobster which is covered with egg on a bed of fried potatoes. Le Parker Meridien also feature a smaller, less expensive version called the ‘regular frittata’ that costs $100 (£54)."},
 {name: "Bagel from Westin Hotel, New York", price: 1000, image: require("./img/donut.jpg"), details: "The pricey bagel, that is topped with white truffle cream cheese and goji berry infused Riesling jelly with golden leaves, joins a list of $1,000 delicacies in Manhattan that includes an ice-cream sundae topped with a 23-karat edible gold leaf and a pizza topped with six kinds of caviar and lobster."}]
 };
 this.calcTotal = this.calcTotal.bind(this);
 this.createProduct = this.createProduct.bind(this);
 this.showProduct = this.showProduct.bind(this);
}

calcTotal(price) {
 this.setState({total: this.state.total + price})
}


showProduct(details){
 alert("Info: " + details);
}

createProduct(product) {
 this.setState({
   productList: this.state.productList.concat(product)
 });
}

 render(){
   var component = this;
   var products = this.state.productList.map(function(prod){
     return(
       <div className="one">
        <div className="col col-xs-6 col-md-4 box">
          <div className="note">
            <div className="note-content">
              <p className="workss">
                <Product name={prod.name} price={prod.price}
                  handleShow={component.showProduct}
                  handleTotal={component.calcTotal}/>
              </p>
            </div>
          </div>
          <img src={prod.image} className="image-box img-responsive"/>
        </div>
       </div>
     );
   });
   return(
   <div>
     {products}
   </div>
 );
 }
}


export default ProductList;
