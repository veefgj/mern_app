import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons';
import logo from '../../../src/assets/images/logo.png'
import { Image } from 'antd';
const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Image src={logo} style={{width: '230px', height: '230px', position:'absolute', top: '-270px', left:'-25px'}}/>
            <StyleNameProduct>hahahaha</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight: '8px'}}>
                    <span>4.95</span> <StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                
                </span>
                <WrapperStyleTextSell>| Da ban 1000+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{marginRight: '8px'}}>12,999,999 VND</span>
                <WrapperDiscountText>-15%</WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle> 
    )
}

export default CardComponent