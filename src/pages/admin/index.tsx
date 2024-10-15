import AppLayout from '@/layouts/AdminLayout';
import { NextPage } from 'next';
import React from 'react';

const Dashboard: NextPage = () => {
  return (
  <AppLayout title="Admin">
    <div>Dashboard</div>
  </AppLayout>
  );
};

export default Dashboard;