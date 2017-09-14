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
   this.props.handleShow(this.props.name);
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
         <button onClick={this.buy}>+</button>
         <button onClick={this.show}>Show</button>
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
 [{name: "The Buddha Jumps Over the Wall soup", price: 143, image: require("./img/buddha.jpg")},
 {name: "The Fleurburger 5000", price: 5000, image: require("./img/burger.jpeg")},
 {name: "Golden Phoenix Cupcake", price: 1010, image: require("./img/burger.jpeg")},
 {name: "Samundari Khazana curry", price: 3200, image: require("./img/currry.jpg")},
 {name: "The Zillion Dollar Lobster Frittata", price: 1000, image: require("./img/frittata.jpg")},
 {name: "Bagel from Westin Hotel, New York", price: 1000, image: require("./img/donut.jpg")}]
 };
 this.calcTotal = this.calcTotal.bind(this);
 this.createProduct = this.createProduct.bind(this);
}

calcTotal(price) {
 this.setState({total: this.state.total + price})
}


showProduct(name){
 alert("You are buying " +name);
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
       <div>
        <div className="col col-xs-6 col-md-4 box">
        <div class="note">
          <div class="note-content">
          <Product name={prod.name} price={prod.price}
            handleShow={component.showProduct}
            handleTotal={component.calcTotal}/>
          </div>
        </div>

        <div className="image-box">
          <img src={prod.image} className="image-box"/>
          <br/>
        </div>


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
