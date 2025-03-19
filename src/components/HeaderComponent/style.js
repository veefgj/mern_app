import styled from "styled-components";
import {Row} from 'antd'
export const WrapperHeader = styled(Row)`
        padding: 10px 120px;
        background-color: rgb(128, 53, 253);
        align-items: center;
        gap: 16px;
        flex-wrap: nowrap;
`
export const WrapperTextHeader = styled.span`
        font-size: 30px;
        color: #fff;
        font-weight: bold;
        text-align: left
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
