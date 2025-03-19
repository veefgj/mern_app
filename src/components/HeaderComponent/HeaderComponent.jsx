import React from 'react'
import { Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import Search from 'antd/es/transfer/search';
import { CaretDownOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
const HeaderComponent = () => {
    return (
        <div>

            <WrapperHeader >
                <Col span={6}>
                    <WrapperTextHeader>MERN</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                    size = "large"
                    textButton = "Tìm kiếm"
                    placeholder="input search text"
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '25px' }} />

                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff', paddingLeft: '20px' }} />
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>

                    </div>
                </Col>
            </WrapperHeader>

        </div>
    )
}

export default HeaderComponent