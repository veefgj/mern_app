import React, { useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from '../SignInPage/style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Image } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import ImageLogo from '../../assets/images/signin.png';

const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ccc', height: '100vh' }}>
            <div style={{ width: '800px', height: '450px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1 style={{ margin: 0, padding: 0 }}>Hello,</h1>
                    <p style={{ fontSize: '15px' }}>Đăng nhập hoặc tạo tài khoản</p>
                    <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />

                    {/* Ô nhập mật khẩu */}
                    <div style={{ position: 'relative', marginBottom: '10px' }}>
                        <span
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                        </span>
                        <InputForm
                            placeholder="password"
                            type={isShowPassword ? "text" : "password"}
                        />
                    </div>

                    {/* Ô nhập lại mật khẩu */}
                    <div style={{ position: 'relative' }}>
                        <span
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                            onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                        >
                            {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                        </span>
                        <InputForm
                            placeholder="confirm password"
                            type={isShowConfirmPassword ? "text" : "password"}
                        />
                    </div>

                    <ButtonComponent
                        size={20}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '26px 0 10px'
                        }}
                        textButton={'Đăng ký'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    />
                    <p style={{ fontSize: '13px' }}>Bạn đã có tài khoản <WrapperTextLight> Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={ImageLogo} preview={false} alt='image-logo' height='203px' width='203px' />
                    <h1 style={{ color: 'rgb(10, 104, 255)', fontWeight: '400' }}>Mua sắm tại tihati</h1>
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignUpPage;