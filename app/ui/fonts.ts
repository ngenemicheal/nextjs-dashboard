import { Inter, Playfair_Display, Lusitana } from 'next/font/google';

export const inter = Inter({ 
    subsets: ['latin']
});

export const playfairDisplay = Playfair_Display({
    weight: ['400', '500', '700', '800'], 
    subsets: ['latin']
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});