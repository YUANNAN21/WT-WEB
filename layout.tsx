import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <header style={{ backgroundColor: '#f0f0f0', padding: '10px', display: 'flex', alignItems: 'center' }}>
          <img 
            src="/WT LOGO.svg"
            alt="网站Logo"
            width={100}
            height={48}
            style={{ marginRight: '10px' }}
          />
          <p>这是一个测试文本。如果您能看到这个，说明布局正在正确加载。</p>
        </header>
        {children}
      </body>
    </html>
  )
}