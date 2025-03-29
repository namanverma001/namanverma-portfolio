"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const translateX = useTransform(scrollYProgress, [0, 1], [0, 1000])
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -1000])
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1])
  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.2], [-700, 0])

  return (
    <div
      ref={ref}
      className="relative flex h-[160vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-20 flex gap-20" style={{ translateX }}>
          {firstRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex gap-20" style={{ translateX: translateXReverse }}>
          {secondRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex gap-20" style={{ translateX }}>
          {thirdRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
      <h1 className="text-2xl font-bold dark:text-white md:text-7xl">
        The Ultimate <br /> development studio
      </h1>
      <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
        We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers
        and designers.
      </p>
    </div>
  )
}

const ProductCard = ({
  product,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
}) => {
  return (
    <div key={product.title} className="group/product relative h-96 w-[30rem] flex-shrink-0 md:w-[40rem]">
      <div className="block h-full w-full overflow-hidden rounded-xl bg-white/5 p-4 md:p-8">
        <div className="relative z-10 flex h-full w-full flex-col justify-between">
          <div className="relative h-full w-full rounded-xl bg-white/5">
            <Image
              src={product.thumbnail || "/placeholder.svg"}
              alt={product.title}
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="mt-4 font-bold text-white">{product.title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

