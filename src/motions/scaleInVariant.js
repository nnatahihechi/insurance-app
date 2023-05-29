const scaleInVariant = (delay) => ({
    visible: {
        // opacity: 1,
        scale: 1,
        transition:{
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.5,
        }
    },
    hidden: {
        // opacity: 0,
        scale: 0
    }
}) 

export default scaleInVariant;