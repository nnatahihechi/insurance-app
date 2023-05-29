const bulletTextVariant = (delay, xH=-30, yH=30) => ({
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        ease: "easeInOut",
        duration: 0.7,
      },
    },
    hidden: {
      opacity: 0,
      x: xH,
      y: yH,
    },
  });

export default bulletTextVariant;