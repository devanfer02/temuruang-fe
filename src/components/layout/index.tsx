import React from "react"
import Navbar from "../navbar/index"
import Footer from "../footer/index"

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({
  children,
  title = ""
}: LayoutProps) {
  return (
    <>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
    </>
  )
}