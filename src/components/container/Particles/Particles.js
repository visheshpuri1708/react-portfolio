import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { useCallback, useMemo } from "react";
//import { loadFull } from "tsparticles";

const ParticlesComponent = (props) => {

    const options = useMemo(() => {
        return {
            background: {
                color: '#111'
            },
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    }
                },
                modes: {
                    push: {
                        quantity: 5
                    },
                    repulse: {
                        distance: 100
                    }
                }
            },
            particles: {
                links: {
                    enable: false,
                    distance: 100
                },

                move: {
                    enable: true,
                    speed: { min: 1, max: 1.25 }
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }
                },
                size: {
                    value: { min: 3, max: 4 }
                },
                color: {
                    value: ['#CCFF00', '#0FF0Fc', '#1F51FF']
                }
            }
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        //loadFull(engine);
    }, [])

    return <Particles id={props.id} init={particlesInit} options={options} />
}

export default ParticlesComponent;