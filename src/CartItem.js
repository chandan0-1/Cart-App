import React from 'react'

class CartItem extends React.Component{
  render(){
    return(
      <div className='cart-item'>
          {/* left block */}
          <div className="left-block">
            <img style={styles.image}/>
          </div>

          {/* right block */}
          <div className="right-block">
            <div style={ {fontSize:25} } >Phone</div>
            <div style={ { color: '#777'} } >Rs 999</div>
            <div style={ { color: '#777'} } >Qty: 1 </div>
            <div className="cart-item-actions">
              {/* buttons */}
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