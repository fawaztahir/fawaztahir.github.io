import './globals.css';
import Header from './components/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Fawaz Tahir | Full stack developer',
    description: 'Fawaz Tahir, Senior Full Stack Developer',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={inter.className}>
                <main className="min-h-screen p-10">
                    <Header />

                    {children}
                </main>
            </body>
        </html>
    );
}
