import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import registerServiceWorker from './registerServiceWorker';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            cartTotal: null,
            count:0
        };
    }



    calculateTotal() {
      var values = this.state.cart;
      var total = 0;
      for (var i=0; i<values.length; i++) {
        total += +values[i].price;
      }
      this.setState({cartTotal: total});
    }
    calculateTotalm() {
        var values = this.state.cart;
        var total ;
        for(var i = 0; i<values.length; i++){
            total = total - this.state.cart[i]

        }
        this.setState({cartTotal: total});
        console.log(total)

    }




    onClick =(data) => {
    {
        this.setState({
            count: this.state.count + 1
        });
    };
    {
        var values = this.state.cart;
        values.push({"price": data.currentPrice[0] });
        this.setState({cart: values});
        this.calculateTotal()
        console.log(this.state.cartTotal) // od ovoga
        console.log(data.currentPrice[0]) // oduzeti ovo
    };
}
    onClickm =(data, e) => {
        {
            this.setState({
                count: this.state.count - 1
            });
        };
        {
            var values = this.state.cartTotal;
            this.setState({
                cart: values
            })


        };
    }



    handleRemove = (data) => {
      var currentCart = this.state.cart;

      for (var i = 0; i < currentCart.length; i++)
      if (currentCart[i].id && currentCart[i].id === data.id) {
          currentCart.splice(i, 1);
          break;
      }
      this.setState({cart: currentCart});
      this.calculateTotal()
    }

    render() {
        var { name, price, payment, pic } = this.props;
        let cartContent = this.state.cart;
        return (
            // <div className="container product">

            // {data.map((item, index) => (
            //<div className="constainer" key={index}>
                // <h2 className="container">{item.name}</h2>
                // <h4 className="container">Price: {item.currentPrice}</h4>
                // <h4 className="container">Payment Method: {item.paymentMethod}</h4>
                // <img src={item.image} alt="" className="container img"/>
                //  <br />
                //  <button onClick={this.handleClick.bind(this, item)}>add to cart</button>
                //   </div>
                //   ))}
                //    <footer class="_grid cart-totals">
                    //        <div>Total: {this.state.cartTotal}
                //     <div>
                    //      {cartContent.map((item, index) => (
                                //           console.log(item),
                    //                <div key={index}>{item.name} - {item.price} <button onClick={this.handleRemove.bind(this, item)}>remove</button></div>
                    //         ))}
                    //      </div>
                //   </div>
                //     </footer>
                //  </div>

            <div className="main">
                <h1> React Shopping cart</h1>

                {data.map((item, index) => (





                        <div id="shopping-cart--list-item-template" type="text/template" key={index}>
                            <li className="_grid shopping-cart--list-item">
                                <div className="_column product-image">
                                    <img className="product-image--img" src={item.image} alt="Item image" />
                                </div>
                                <div className="_column product-info">
                                    <h4 className="product-name">{item.name}</h4>
                                    <h5>{item.paymentMethod}</h5>
                                </div>
                                <div className="_column product-modifiers">
                                    <div className="_grid">
                                        <button className="_btn _column product-subtract" onClick={this.onClickm.bind(this)}>-</button>
                                        <div className="_column product-qty">{this.state.count}</div>
                                        <button className="_btn _column product-plus" onClick={this.onClick.bind(this, item)}>+</button>
                                    </div>

                                    <div className="price product-total-price">${item.currentPrice}</div>
                                </div>
                            </li>
                        </div>


                    ))}
                    <footer className="_grid cart-totals">
                        <div className="_column subtotal" id="subtotalCtr">
                            <div className="cart-totals-key">Number of items</div>
                            <div className="cart-totals-value">{this.state.count}</div>
                        </div>

                        <div className="_column taxes" id="taxesCtr">
                            <div className="cart-totals-key">Taxes (10%)</div>
                            <div className="cart-totals-value">{this.state.cartTotal / 100 * 10}</div>
                        </div>
                        <div className="_column total" id="totalCtr">
                            <div className="cart-totals-key">Total</div>
                            <div className="cart-totals-value">${this.state.cartTotal} </div>
                        </div>

                    </footer>



            </div>
        );
    }

}

ReactDOM.render(<Profile/>, document.getElementById('app'));
registerServiceWorker();