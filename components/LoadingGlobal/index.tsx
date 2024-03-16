import React from 'react';
import { Skeleton } from 'antd';

interface IProps {
  number?: number;
}

export function LoadingGlobal(props: IProps) {
  const { number = 1 } = props;

  const numberArray: number[] = [];

  for (let i = 0; i < number; i++) {
    numberArray.push(i);
  }

  return (
    <div className="">
      {numberArray && numberArray.map((index) => <Skeleton key={index} />)}
    </div>
  );
}
