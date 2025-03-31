import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextprice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
  const onChange = () => { }
  const renderContent = (type, option) => {
    switch (type) {
      case 'text':
        return option.map((option) => {
          return (
            <WrapperTextValue>{option}</WrapperTextValue>
          )
        })
      case 'checkBox':
        return (
          <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
            {option.map((option) => {
              return (
                <Checkbox value={option.value}>{option.label}</Checkbox>

              )
            })}

          </Checkbox.Group>
        )
      case 'star':
        return option.map((option) =>{
          return (
            <div style={{display: 'flex', gap: '6px'}}>
            <Rate style={{fontSize: '14px'}} disabled defaultValue={option} />
            <span>{`từ ${option} sao`}</span>
            </div>
          )
        })
      case 'price':
        return option.map((option) =>{
          return (
            <WrapperTextprice>{option}</WrapperTextprice>
          )
        })

      default:
        return {

        }
    }
  }
  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent('text', ['Tu lanh', 'Ti vi', 'Dien thoai'])}
      </WrapperContent>
      {/* <WrapperContent>
        {renderContent('checkBox', [
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
          { value: 'c', label: 'C' },

        ])}

      </WrapperContent>
      <WrapperContent>
        {renderContent('star', [3, 4, 5])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('price', ['duoi 40 ', 'tren 50'])}
      </WrapperContent> */}
    </div>
  )
}

export default NavbarComponent