"use client"

import React, { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { loadFull } from 'tsparticles'

const ParticleComponent = () => {
    // const options = useMemo(() => {
    //     return {
    //         particles: {
    //             links: {
    //                 enable: true,
    //             },
    //             move: {
    //                 enable: true
    //             }
    //         }
    //     }
    // }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine)
    }, []);

    const particlesLoaded = useCallback(container => {
        console.log(container);
    }, []);

    return (
        <div className='-z-10 position: fixed'>
            <Particles 
                
                height='100vh' 
                width='100vw' 
                loaded={particlesLoaded} 
                init={particlesInit} 
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 600,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.7,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                    fullScreen: true
                }}
                />
            </div>
    )
}

export default ParticleComponent