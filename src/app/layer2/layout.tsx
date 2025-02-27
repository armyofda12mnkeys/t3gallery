
export default function SecondLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="w-full">2nd Layout</div>
      <body>{children}</body>
    </div>
  );
}
