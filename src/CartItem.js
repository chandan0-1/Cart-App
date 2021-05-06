import React from 'react'

class CartItem extends React.Component{
  constructor(){
    super()
    this.state = {
      price :999,
      title:'Mobile Phone',
      qty:1,
      img:''
    }
    // this.addQuantity = this.addQuantity.bind(this); or use arrow function
  }
  
  addQuantity = () =>{
    console.log("this.state", this.state);
  }


  render(){

    const {price, title, qty} = this.state;

    return(
      <div className='cart-item'>
          {/* left block */}
          <div className="left-block">
            <img style={styles.image}/>
          </div>

          {/* right block */}
          <div className="right-block">
            <div style={ {fontSize:25} } >{title}</div>
            <div style={ { color: '#777'} } >Rs: {price}</div>
            <div style={ { color: '#777'} } >Qty: {qty} </div>
            
            <div className="cart-item-actions">
              <img 
                alt="add" 
                className="action-icons" 
                src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1620287344~hmac=c06abb80efc58a09e2da8abd7a0ed913" 
                onClick={this.addQuantity}
              />

              <img 
                alt="decrease" 
                className="action-icons" 
                src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1620287407~hmac=e4be64d4bab1aab23f75378694012aca" 
              />
              
              <img 
                alt="delete" 
                className="action-icons" 
                src="https://www.flaticon.com/svg/vstatic/svg/3389/3389017.svg?token=exp=1620287884~hmac=883a76e6b259db6d16e168eb48b7efbc" 
              />

            </div>
          </div>
      </div>
    )
  }
}


const styles = {
  image:{
    height:180,
    width:180,
    borderRadius:4,
    background:'#ccc'
  }
}
export default CartItem;