import './globals.css';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'FriendZone | Home',
  description: 'Welcome to the FriendZone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
