import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC } from 'react';
import Home from '../components/home/Home';

const Index: FC = () => <Home />;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return { props: {} };
};

export default Index;
