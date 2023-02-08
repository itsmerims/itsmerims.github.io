import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import anime from 'animejs'

const SplashScreen = ({ finishLoading }) => {

    const [isMounted, setIsMounted] = useState(false)

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader.add({
            targets: "#logo",
            translateY: {
                value: 200,
                duration: 800
              },
            rotate: function () { return anime.random(-360, 360); },
            borderRadius: function () { return ['50%', anime.random(10, 35) + '%']; },
            duration: function () { return anime.random(1200, 1800); },
            delay: 0,
            direction: 'alternate',
            loop: true
        })
    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div
            className="flex h-screen items-center justify-center"
            isMounted={isMounted}
        >
            <Image id='logo' src="/logo.png" alt="Logo" width={100} height={100}></Image>
        </div>
    )
}

export default SplashScreen