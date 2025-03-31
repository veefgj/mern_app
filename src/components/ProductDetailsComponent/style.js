import styled from "styled-components"
import { Col, Image, InputNumber } from "antd"

export const WrapperStyleImageSmall = styled(Image)`
    height: 66px !important;
    width: 66px !important;
`
export const WrapperStyleColSmall = styled(Col)`
    flex-basic: unset;
    display: flex; 
    
`
export const WrapperStyleNameProduct = styled.h1`
    color: rgb(39, 39, 42);
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    word-break: break-word;
    white-space: break-spaces;
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);

`
export const WrapperPriceProduct = styled.div`
    background: rgb(250, 250, 250)
    border-radius: 4px;
`
export const WrapperPriceTextProduct = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    padding: 10px;
    margin-top: 10px;
`
export const WrapperAddressProduct = styled.div`
    span.address{
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 10px;
    }
    span.change-adress{
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`
export const WrapperQualityProduct = styled.div`
    display: flex; 
    gap: 4px;
    align-items: center;
    width: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100px;
`
export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm{
        width: 60px;
        border-top: none;
        border-bottom: none;
        border-radius: 0;
        &.ant-input-number-handler-wrap{
            display: none;
        }
    }
`