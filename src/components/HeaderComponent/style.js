import styled from "styled-components";
import {Row} from 'antd'
export const WrapperHeader = styled(Row)`
        background-color: rgb(26, 148, 255);
        align-items: center;
        gap: 14px;
        flex-wrap: nowrap;
        width: 1300px;
        height: 70px;
        padding: 10px 0;

`
export const WrapperTextHeader = styled.span`
        font-size: 30px;
        color: #fff;
        font-weight: bold;
        text-align: left;
        padding-left: 90px;
`
export const WrapperHeaderAccount = styled.div`
        display: flex;
        align-items: center;
        color: #fff ;
        padding-left: 20px;
        gap: 10px;
`
export const WrapperTextHeaderSmall = styled.span`
        font-size: 12px;
        color: #fff;
`
