import React from 'react';
import ContainerWrapper from './style';

type Props ={
  children?:any,
  className?:any,
}

const Container = (props:Props) => {
  // Add all classs to an array
  const {children,className} = props



  const addAllClasses = ['container'];
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      className={addAllClasses.join(' ')}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
