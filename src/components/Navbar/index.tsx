'use client'
import { useState } from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link
} from '@nextui-org/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
      'Profile',
      'Dashboard',
      'Activity',
      'Analytics',
      'System',
      'Deployments',
      'My Settings',
      'Team Settings',
      'Help & Feedback',
      'Log Out',
    ];

  return (
    <Nav onMenuOpenChange={() => setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem as={Link} color='foreground' href='#'>
          Features
        </NavbarItem>
        <NavbarItem isActive as={Link} href='#'>
          Customers
        </NavbarItem>
        <NavbarItem as={Link} color='foreground' href='#'>
          Integrations
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem as={Link} className='hidden lg:flex' href='#'>
          Login
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
}
