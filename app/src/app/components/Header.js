'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Navigation from '../data/Navigation';

export default function Header() {
    const logoWidth = 120;
    const logoRatio = 3.6666666667;
    const segment = useSelectedLayoutSegment();
    const classNames = ['font-medium'];
    return (
        <header>
            <div className="navbar p-10 pb-0">
                <div className="flex-1">
                    <Link href={'/'}>
                        <Image
                            src={'/logo.png'}
                            width={logoWidth}
                            height={Math.round(logoWidth / logoRatio)}
                            alt={'Fawaz Tahir'}
                        />
                    </Link>
                </div>
                
                <div className="flex-none">
                    <ul class="menu menu-horizontal px-1">
                        {Navigation.map((navItem) => (
                            <li className="mr-3 last:mr-0">
                                <Link href={navItem.href} className={[(segment === navItem.segment ? 'bg-base-100' : ''), ...classNames].join(' ')}>{navItem.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
