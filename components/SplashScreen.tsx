import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import anime from 'animejs'

const SplashScreen = ({ finishLoading }: any) => {

    const [isMounted, setIsMounted] = useState(false)

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader.add({
            targets: "#logo",
            scale: {
                value: [0, 1],
                duration: 500,
                ease: "easeInOutElastic"
            },
            rotate: {
                value: 360,
                duration: 1500,
                delay: 500,
                ease: "easeInOutElastic"
            },
            delay: 0,
        })

        loader.add({
            targets: "#logo",
            scale: {
                value: [1,0],
                duration: 500,
                ease: "easeInOutElastic"
            },
            opacity: {
                value: [1,0],
                duration: 500,
                delay: 50,
                ease: "easeInOutElastic"
            },
            delay: 0
        })
    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div id='bg' className="bg-slate-500 flex h-screen items-center justify-center"
            isMounted={isMounted}
        >
            <Image className='scale-0' id='logo' src="/logo.png" alt="Logo" width={100} height={100}></Image>
        </div>
    )
}

export default SplashScreen