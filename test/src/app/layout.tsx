import "@/style/custom.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
        <title>Ghostie - Desktop Agent Platform</title>
        <meta name="description" content="Ghostie is a desktop agent platform that allows you to create and manage your own AI agents." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}