"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="flex flex-col items-center justify-center space-y-8 text-center py-12 md:py-32">
            <motion.div 
              className="space-y-6 md:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter px-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Your one stop for
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  all your <span className="bg-gradient-to-tr from-orange-300 to-orange-500 bg-clip-text text-transparent">university </span> needs👨🏻‍💻
                </motion.span>
              </h1>
              <motion.p 
                className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Get NeooColab Java / C++ Solutions and various other university resources such as announcements, events, ppt's, previous year papers and other necessary to make you life much easier
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href="/resources"><Button size="lg" className="w-full sm:w-auto">
                Resources
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </motion.svg>
              </Button></Link>
              <Link href={"https://x.com/anuragmaurya_x"} target="__blank"><Button size="lg" variant="outline" className="w-full sm:w-auto">
                Events
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </motion.svg>
              </Button></Link>
            </motion.div>
            {/* Dashboard Preview */}
            <motion.div 
              className="w-full flex flex-col items-center mt-6 md:mt-10 px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <motion.div 
                className="relative w-full max-w-5xl overflow-hidden rounded-lg md:rounded-xl border bg-background shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 flex w-full items-center justify-between bg-gray-950/70 px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="">
                  <Image 
                    src="/hero.png"
                    alt="Hero image"
                    width={1920}
                    height={1080}
                  />
                </div>
              </motion.div>
            </motion.div>
            <h2 className="text-sm">created with ❤️ by <Link href="https://t.me/notragey" target="__blank" className="bg-gradient-to-br from-orange-300 to-orange-500 font-semibold bg-clip-text text-transparent">@notragey</Link></h2>
          </div>
        </div>
      </div>
    </div>
  );
}
