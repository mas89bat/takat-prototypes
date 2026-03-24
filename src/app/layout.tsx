import TakatBanner from '@/components/TakatBanner';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
        <TakatBanner />
      </body>
    </html>
  );
}
