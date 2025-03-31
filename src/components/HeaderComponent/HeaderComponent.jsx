import React from 'react'
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import Search from 'antd/es/transfer/search';
import { CaretDownOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const HeaderComponent = () => {
    return (
        <div style={{width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center'}}>

            <WrapperHeader >
                <Col span={6}>
                    <WrapperTextHeader>MERN</WrapperTextHeader>
                </Col>
                <Col span={10}>
                    <ButtonInputSearch
                    size = "large"
                    border = "fasle"
                    textButton = "Tìm kiếm"
                    placeholder="input search text"
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '44px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />

                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                    <Badge count={4} size='small' >
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff', paddingLeft: '20px' }} />   

                        </Badge>
     
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>

                    </div>
                </Col>
            </WrapperHeader>

        </div>
    )
}

export default HeaderComponent