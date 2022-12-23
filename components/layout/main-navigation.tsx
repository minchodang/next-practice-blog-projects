import Link from 'next/link';
import classes from './main-naviagtion.module.css';
import { Logo } from './logo';

export const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
