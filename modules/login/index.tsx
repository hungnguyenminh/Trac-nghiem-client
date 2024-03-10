'use client';

import React from 'react';
import './index.scss';
import { Formik } from 'formik';

import { useMutation } from 'react-query';
import { notification } from 'antd';
import { UnlockOutlined, UserOutlined } from '@ant-design/icons';
import Image from 'next/image';

import ErrorMessageGlobal from '@/components/ErrorMessageGlobal';
import ApiUser from '@/api/ApiUser';
import {
  CheckboxGlobal,
  InputGlobal,
  InputPasswordGlobal,
} from '@/components/InputGlobal';
import { ButtonGlobal } from '@/components/ButtonGlobal';
import { loginUser } from "@/redux/slices/UserSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

interface UserAccount {
  email: string;
  password: string;
}

export function Login(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialValues: UserAccount = {
    email: '',
    password: '',
    // remember: false,
    // pass_jwt: "",
  };

  const login = useMutation(ApiUser.login);
  const handleLogin = (value: UserAccount): void => {
    console.log(111);
    // loginFunction();
    const formData = new FormData();
    formData.append('email', 'hungnm@gmail.com');
    formData.append('password', '123456');
    // axios.post('/api/auth/login', formData)
    //     .then(res => {
    //       console.log('asdfsaf')
    //       return res.data
    //     })
    //     .then(data => {console.log(data)})

    login.mutate(
      {
        email: value.email.trim(),
        password: value.password.trim(),
      },
      {
        onSuccess: (res: any) => {
          console.log('res', res);
          if (res) {
            dispatch(loginUser(res));
            router.push('/');
            notification.success({
              message: 'Đăng nhập thành công!',
            });
          }
        },
      }
    );
  };

  const handleCheckRemember = (checked: boolean): void => {
    if (checked) {
      // dispatch(rememberAccount());
      sessionStorage.removeItem('isRemember');
    } else {
      // dispatch(noRememberAccount());
      sessionStorage.setItem('isRemember', 'false');
    }
  };

  const validate = (values: UserAccount) => {
    const errors: Partial<UserAccount> = {};

    if (!values.email) {
      errors.email = 'Vui lòng nhập email';
    }

    if (!values.password) {
      errors.password = 'Vui lòng nhập mật khẩu';
    }

    return errors;
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[31rem] w-[31rem]">
        <Image
          alt="banner"
          src="/img/banner.jpg"
          width={300}
          height={300}
          className="h-full w-full"
        />
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleLogin}
          validateOnChange
          validateOnBlur
          validate={validate}
        >
          {({ handleSubmit }): JSX.Element => {
            return (
              <div className="login-container">
                <div className="login-container">
                  <h1>WELCOME BACK</h1>
                  <div className="mb-[0.5rem] mt-[1rem]">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="mb-[0.2rem]">Email</label>
                    <InputGlobal
                      name="email"
                      placeholder="email"
                      prefix={<UserOutlined />}
                      className="input_login"
                      onPressEnter={(): void => handleSubmit()}
                    />
                    <ErrorMessageGlobal name="email" />
                  </div>

                  <div className="mb-[0.5rem]">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="mb-[0.2rem]">Password</label>
                    <InputPasswordGlobal
                      name="password"
                      placeholder="Password"
                      prefix={<UnlockOutlined />}
                      className="input_login"
                      onPressEnter={(): void => handleSubmit()}
                    />
                    <ErrorMessageGlobal name="password" />
                  </div>

                  <div className="forgot-password-wrap">
                    <CheckboxGlobal
                      name="remember"
                      // checked
                      onChange={(e: any): void =>
                        handleCheckRemember(e.target.checked)
                      }
                    >
                      Nhớ tài khoản
                    </CheckboxGlobal>

                    <div className="forgot-password_link">Quên mật khẩu?</div>
                  </div>

                  <ButtonGlobal
                    onClick={handleSubmit}
                    className="btn-login"
                    title="Đăng nhập"
                    type="primary-filled"
                    loading={login.isLoading}
                  />
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
