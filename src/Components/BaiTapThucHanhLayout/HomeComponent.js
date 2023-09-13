import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import CarouselComponent from './CarouselComponent'
import ItemComponent from './ItemComponent'


export default class HomeComponent extends Component {
    render() {
        return (
            <div className='bg-dark'>
               
                <HeaderComponent/>

             <div className="body bg-light">
              
                <CarouselComponent/>
                <ItemComponent/>
             </div>

                <FooterComponent/>

            </div>
        )
    }
}
