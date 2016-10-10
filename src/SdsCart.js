import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const SdsCart = React.createClass({
    getInitialState() {
        return {
            cart: []
        }
    },
    handleClick(event){
      this.setState({
        cart: [{
                "id": "090003e8806e9da2",
                "productId": 1,
                "name": "Product 1",
                "description": "Chinese trad. Taiwan",
                "fields": ["Chinese trad.", "Taiwan"],
                "href": "/en-US/ShowPDF.ashx?id=090003e8806e9da2",
                "download": ""
            },{
                "id": "090003e8806e9d63",
                "productId": 2,
                "name": "Product 2",
                "description": "English Taiwan",
                "fields": ["English","Taiwan"],
                "href": "/en-US/ShowPDF.ashx?id=090003e8806e9d63",
                "download": ""
          }]
      })
      event.preventDefault();
    },
    renderCart(){
      let cartContent = (<li>
          <p>Your cart is empty. Add documents to your cart to download them as a ZIP file</p>
          <a href="#" onClick={() => this.handleClick(event)}>Add Item </a>
        </li>)
      if (this.state.cart.length > 0){
        cartContent = this.state.cart.map((item, index) => {
          return (
            <li key={item.id} data-sds-id={item.id} data-product-id={item.productId}>
              <a href="#" className="product-name ">{item.name}</a>
              <p className="sds-desc">{item.description}</p>
              <p> 
                <a href={item.href} className="cl-search-sds__link cl-search-sds__link--download" target="_blank">Download</a>
                <a href="#" className="cl-search-sds__link--add-cart item-added">Remove </a>
              </p> 
            </li>
          )
        })
      }
      return cartContent;
    },

    render() {
        return (
          <div className="cl-themed-block__item">
              <h4 className="cl-themed-block__title">Document Cart<span className="cart-counter">{this.state.cart.length}</span></h4>
              <div className="cl-search-sds__cart">
                  <ul className="no-items">
                      {this.renderCart()}
                  </ul>
              </div>
          </div>
      );
    }
})

ReactDOM.render( <SdsCart /> ,
    document.getElementById('sdsCart')
);