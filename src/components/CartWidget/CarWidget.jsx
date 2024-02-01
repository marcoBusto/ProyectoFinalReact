import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import {Button} from 'react-bootstrap'  

function CartWidget() {
  return (
          <Button variant="light">E-shop<FaCartShopping /></Button>
  )
}

export default CartWidget
