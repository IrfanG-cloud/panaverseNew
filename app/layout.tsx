"use client"

import './globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <ChakraProvider>
        <head />
     
      <head />
      <body>
        <main>
          {children}
        </main>
      </body>
    </ChakraProvider>

  )
}
