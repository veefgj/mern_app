import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        heigh: 200px;
        width: 200px;
    }
    position: relative;
`
export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color:rgb(56, 56, 61)
`
export const WrapperReportText = styled.div`
    font-size: 12px;
    color:rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 8px 0 4px;

`
export const WrapperPriceText = styled.div`
    font-size: 18px;
    color:rgb(255, 66, 78);
    font-weight: 500;
`
export const WrapperDiscountText = styled.span`
    font-size: 14px;
    color:rgb(255, 66, 78);
    font-weight: 500;
    padding-left: 20px
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);

`