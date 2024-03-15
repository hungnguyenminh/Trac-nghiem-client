'use client';

import React from 'react';
import './index.scss';
import {Formik} from 'formik';

import {useMutation} from 'react-query';
import {Input, notification} from 'antd';
import {UnlockOutlined, UserOutlined} from '@ant-design/icons';
import Image from 'next/image';

import ErrorMessageGlobal from '@/components/ErrorMessageGlobal';
import ApiUser from '@/api/ApiUser';
import {ButtonGlobal} from '@/components/ButtonGlobal';
import {loginUser} from "@/redux/slices/UserSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/navigation";

interface UserAccount {
  email: string;
  password: string;
  username: string;
  fullname: string;
  confirm_password: string;
  role: number | null;
}

export function Register(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialValues: UserAccount = {
    email: '',
    password: '',
    username: '',
    fullname: '',
    confirm_password: '',
    role: null
    // remember: false,
    // pass_jwt: "",
  };

  const register = useMutation(ApiUser.register);
  const handleLogin = (value: UserAccount): void => {
    if(value.password !== value.confirm_password){
      notification.error({
        message: 'Mật khẩu và nhập lại mật khẩu phải trùng nhau !',
      });
    }
    console.log('value', value)
    register.mutate(
        {
          username: value.username.trim(),
          fullname: value.fullname.trim(),
          email: value.email.trim(),
          password: value.password.trim(),
          role: 2,
        },
        {
          onSuccess: (res: any) => {
            console.log('res', res);
            if (res) {
              dispatch(loginUser(res));
              router.push('/login');
              notification.success({
                message: 'Đăng kí thành công!',
              });
            }
          },
          onError: (res: any) => {
            notification.error({
              message: res?.response?.data?.message?.email[0],
            });
          }
        }
    );
  };

  const goToRegister = (): void => {
    router.push('/register')
  }
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
              // validate={validate}
          >
            {({ handleSubmit, values, handleChange }): JSX.Element => {
              return (
                  <div className="login-container">
                    <div className="login-container">
                      <h1>WELCOME BACK</h1>
                      <div className="mb-[0.5rem] mt-[1rem]">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className="mb-[0.2rem]">Username</label>
                        <Input
                            name="username"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                            prefix={<UserOutlined/>}
                            className="input_login"
                            onPressEnter={(): void => handleSubmit()}
                        />
                        <ErrorMessageGlobal name="username"/>
                      </div>
                      <div className="mb-[0.5rem] mt-[1rem]">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className="mb-[0.2rem]">Fullname</label>
                        <Input
                            name="fullname"
                            placeholder="fullname"
                            value={values.fullname}
                            onChange={handleChange}
                            prefix={<UserOutlined/>}
                            className="input_login"
                            onPressEnter={(): void => handleSubmit()}
                        />
                        <ErrorMessageGlobal name="fullname"/>
                      </div>
                      <div className="mb-[0.5rem] mt-[1rem]">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className="mb-[0.2rem]">Email</label>
                        <Input
                            name="email"
                            placeholder="email"
                            value={values.email}
                            onChange={handleChange}
                            prefix={<UserOutlined/>}
                            className="input_login"
                            onPressEnter={(): void => handleSubmit()}
                        />
                        <ErrorMessageGlobal name="email"/>
                      </div>

                      <div className="mb-[0.5rem]">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className="mb-[0.2rem]">Password</label>
                        <Input
                            name="password"
                            placeholder="Password"
                            type='password'
                            value={values.password}
                            onChange={handleChange}
                            prefix={<UnlockOutlined/>}
                            className="input_login"
                            onPressEnter={(): void => handleSubmit()}
                        />
                        <ErrorMessageGlobal name="password"/>
                      </div>
                      <div className="mb-[0.5rem]">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label className="mb-[0.2rem]">Confirm password</label>
                        <Input
                            name="confirm_password"
                            placeholder="confirm password"
                            type='password'
                            value={values.confirm_password}
                            onChange={handleChange}
                            prefix={<UnlockOutlined/>}
                            className="input_login"
                            onPressEnter={(): void => handleSubmit()}
                        />
                        <ErrorMessageGlobal name="confirm_password"/>
                      </div>
                      <ButtonGlobal
                          onClick={handleSubmit}
                          className="btn-login mt-2"
                          title="Đăng kí"
                          type="primary-filled"
                          loading={register.isLoading}
                      />
                      <div className="forgot-password-wrap flex">
                        <div onClick={goToRegister}
                             className="forgot-password_link cursor-pointer font-bold ml-[0.5rem] underline">Đăng nhập
                        </div>
                      </div>
                    </div>
                  </div>
              );
            }}
          </Formik>
        </div>
      </div>
  );
}
