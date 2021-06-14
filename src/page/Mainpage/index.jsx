import React from 'react'
import { Nav, HeaderContent, Sidebar, Service, WorkContent, BlogContent, FooterContent } from '../../components/Moleculs';
const Mainpage = () => {
  return (
    <div>
      <Nav />
      {/* Content */}
      <HeaderContent />
      <Sidebar />
      <Service />
      <WorkContent />
      {/* <BlogContent /> */}
      <FooterContent />
      {/*End  Content */}
    </div>
  )
}

export default Mainpage
