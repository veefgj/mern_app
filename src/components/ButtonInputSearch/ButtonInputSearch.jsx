import { Button } from 'antd'
import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const {
        size, placeholder, textButton, 
        backgroundColorInput ="#fff", 
        backgroundColorButton= 'rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props
    return (
        <div style={{ display: 'flex', backgroundColor: "#fff"}} >
            <InputComponent
                size={size} 
                placeholder={placeholder} 
                style={{backgroundColor: backgroundColorInput, border: 'none', borderRadius: 0,}}
            />
            <ButtonComponent
                size={size} 
                style={{background: backgroundColorButton, border: 'none', borderRadius: 0,}} 
                icon={<SearchOutlined style={{color: colorButton }} />}  
                textButton={textButton}
                styleTextButton={{color: colorButton}}
            />
        </div>
    )
}

export default ButtonInputSearch