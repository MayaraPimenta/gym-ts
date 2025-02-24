import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  page: SelectedPage;
}

const ActionButton = ({ children, setSelectedPage, page }: Props) => {
  return (
    <AnchorLink
      className='transition-colors ease-in-out delay-300 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
      onClick={() => setSelectedPage(page)}
      href={`#${page}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton