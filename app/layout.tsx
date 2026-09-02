import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Sai Vinaya Manaswi Seeda | AI/ML Engineer",description:"Portfolio of Sai Vinaya Manaswi Seeda, an AI/ML Engineer building production LLM applications, multi-agent systems, RAG pipelines, and computer vision solutions.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
