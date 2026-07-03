import React from 'react';
import SidebarAutoScroll from '../components/SidebarAutoScroll';
import MermaidAnchorFix from '../components/MermaidAnchorFix';
import TabAnchorFix from '../components/TabAnchorFix';

export default function Root({ children }) {
  return (
    <>
      {children}
      <SidebarAutoScroll />
      <MermaidAnchorFix />
      <TabAnchorFix />
    </>
  );
}