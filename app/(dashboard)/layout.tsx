import MainLayout from '@/components/Layout/MainLayout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MainLayout>{children}</MainLayout>
    </div>
  );
}
