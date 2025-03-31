import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Button } from "antd";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 14px;
    justify-content: flex-start;
    height: 44px;
`
export const WrapperButtonMore = styled(Button)`
    width: 240px;
    height: 30px;
    border: 1px solid rgb(11, 116, 229);
    color: rgb(11, 116, 229);
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: #fff;
        background: rgb(13, 92, 182);
        
        span {
            color: #fff;
        }
    }
`;
export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
`