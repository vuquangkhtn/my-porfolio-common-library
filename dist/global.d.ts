import { IconifyIcon } from '@iconify/react';
import Button from './typeDefined/Button';
import Input from './typeDefined/Input';
import TextArea from './typeDefined/TextArea';
import Link from './typeDefined/Link';
import NavBarToggler from './typeDefined/NavBarToggler';
import confirmKit from './typeDefined/confirmKit';
import StaticPages from './typeDefined/StaticPages';

declare module "my-porfolio-common-library" { 
    const Button: Button
    const Input: Input 
    const TextArea: TextArea
    const Link: Link
    const NavBarToggler: NavBarToggler
    const Icon: IconifyIcon
    const confirmKit: confirmKit
    const StaticPages: StaticPages 
}
