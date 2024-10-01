import Header from '@/components/common/header';
import DashboardPage from '@/components/Doctor/layout';
import React from 'react'
const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
  <>
    <Header/>
    <DashboardPage children={children} />
    </>
  )
}
export default layout