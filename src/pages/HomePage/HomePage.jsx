import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'



const HomePage = () => {
  const arr = ['TV', 'Tu lanh', 'Laptop']
  return (
    <>
      <div style={{ width: '1300px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {arr.map((item) => (
            <TypeProduct name={item} key={item} />
          ))}
        </WrapperTypeProduct>

      </div>
      <div className='body' style={{width: '100%', backgroundColor: '#efefef'}}>
      <div id="container" style={{ height: '1300px',width: '1300px', margin: '0 auto' }}>

        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <WrapperProducts >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />

        </WrapperProducts>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <WrapperButtonMore type="outline">Xem thêm</WrapperButtonMore>

        </div>

      </div>

      </div>
    </>
  )
}

export default HomePage
