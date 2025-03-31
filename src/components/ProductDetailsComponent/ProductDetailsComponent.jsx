import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/img.webp'
import imageProductSmall1 from '../../assets/images/img1.1.webp'
import imageProductSmall2 from '../../assets/images/img1.2.webp'
import { WrapperAddressProduct, WrapperBtnQualityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColSmall, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const ProductDetailsComponent = () => {
    const onChange = () => { }
    return (
        <div>
            <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px'}}>
                <Col span={10}style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}>
                    <Image src={imageProduct} alt='image product' preview={false} />
                    <Row style={{ paddingTop: "10px" }} >
                        <WrapperStyleColSmall span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall1} alt='image product' preview={false} />
                        </WrapperStyleColSmall>
                        <WrapperStyleColSmall span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall2} alt='image product' preview={false} />
                        </WrapperStyleColSmall>
                        <WrapperStyleColSmall span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall2} alt='image product' preview={false} />
                        </WrapperStyleColSmall>
                        <WrapperStyleColSmall span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall2} alt='image product' preview={false} />
                        </WrapperStyleColSmall>
                        <WrapperStyleColSmall span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall2} alt='image product' preview={false} />
                        </WrapperStyleColSmall>
                        <WrapperStyleColSmall span={4} >
                            <WrapperStyleImageSmall src={imageProductSmall2} alt='image product' preview={false} />
                        </WrapperStyleColSmall>


                    </Row>
                </Col>
                <Col span={14} style={{paddingLeft: '10px'}}>
                    <WrapperStyleNameProduct>Combo trọn bộ 10 cuốn tý quậy (bản đặc biệt tặng kèm bookmark AHA)</WrapperStyleNameProduct>
                    <div>
                        <StarFilled style={{ fontSize: '13px', color: 'rgb(255, 196, 0)' }} />
                        <StarFilled style={{ fontSize: '13px', color: 'rgb(255, 196, 0)' }} />
                        <StarFilled style={{ fontSize: '13px', color: 'rgb(255, 196, 0)' }} />
                        <StarFilled style={{ fontSize: '13px', color: 'rgb(255, 196, 0)' }} />
                        <WrapperStyleTextSell>| Da ban 1000+</WrapperStyleTextSell>

                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến:</span>
                        <span className='address'>Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</span>
                        <span className='change-adress'> - Đổi địa chỉ</span>
                    </WrapperAddressProduct>
                    <div style={{margin: '10px 0 20px', borderTop: '1px solid #e5e5e5', padding: '10px 0', borderBottom: '1px solid #e5e5e5'}}>
                        <div style={{marginBottom: '10px'}}>So luong</div>
                        <WrapperQualityProduct>
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                            <WrapperInputNumber defaultValue={3} onChange={onChange} size='small' />
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                        </WrapperQualityProduct>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap:'12px'}}>
                        <ButtonComponent
                            size={20}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px',
  
                            }}
                            textButton={'Chọn mua'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700'  }}
                        ></ButtonComponent>
                        <ButtonComponent
                            size={20}
                            styleButton={{
                                background: '#fff',
                                height: '48px',
                                width: '220px',
                                border: '1px solid rgb(13, 92, 182)',
                                borderRadius: '4px',
                            }}
                            textButton={'Mua trả sau'}
                            styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                        ></ButtonComponent>
                    </div>
                </Col>

            </Row>
        </div>
    )
}


export default ProductDetailsComponent