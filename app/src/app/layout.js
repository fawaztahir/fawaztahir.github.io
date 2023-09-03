import './globals.css';
import Header from './components/Header';
import Author from './data/Author';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: `${Author.fullName} | ${Author.jobTitle}`,
    description: 'Fawaz Tahir, Senior Full Stack Developer',
};

export default function RootLayout({ children }) {
    return (
        <html className="min-h-screen" lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <Header />
                <main className="h-full p-10">{children}</main>
                <div class="flex-1"></div>
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <aside>
                        <p>Made with <a className="underline" href="https://nextjs.org/" target='_blank'>Next.js</a> + <a className='underline' href="https://daisyui.com/" target='_blank'>DaisyUI</a></p>
                    </aside>
                </footer>
            </body>
        </html>
    );
}
