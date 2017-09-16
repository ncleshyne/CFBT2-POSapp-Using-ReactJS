# Simple Shopping Cart App using ReactJS

A newbie in ReactJS giving a tutorial on how to create a simple shopping cart app. There are no prerequisites other than basic Javascript and HTML skills. This [article](https://nodeca.github.io/pica/demo/) is also a good headstart on React. :)

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Introduction](#part-1)

### Introduction
Today, we're going to build an interactive shopping cart system.

If you like, you can check out the final result [here](https://github.com/ncleshyne/ShoppingCartUsingReactJS). I am just a beginner in ReactJS, so you might have better ways to code than this (I'm always open to your feedbacks). I will only be showing snippets of code, you could always see the full code on my Github.

### Getting Started
Before you get too excited...

- Make sure you have a recent version of Node.js installed.
- Start building the app by:
   ```
   npm install -g create-react-app
   create-react-app shopping-cart
   cd shopping-cart
   npm start
   ```
`create-react-app` is a global command-line utility that you use to create new projects. When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.
Now if you run npm start in the project folder and open http://localhost:3000 in the browser, you should see a nice-looking ReactJS welcome page.


### Folder Structure

After creation, your project should look like this:

```
shopping-cart/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>


You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.


### Part 1
Now, let's get started for real.
First, let's add life to our app by adding Bootstrap and jQuery.
Open up `index.html` inside the `public` folder, do your magic so that your code will now look like this:
```
...
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>My POS</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
 ...
```
Now open up `App.js` (from the `src` folder). To start, let's delete the existing component called `App`. Let's add our own by typing these:
```
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
 alert(details);
}

createProduct(product) {
 this.setState({
   productList: this.state.productList.concat(product)
 });
}

 render()
```
