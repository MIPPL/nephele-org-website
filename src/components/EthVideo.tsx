import { Box, useColorModeValue } from "@chakra-ui/react"

const EthVideo = () => {
  const src = useColorModeValue(
    "Nephele-hero-light.mp4",
    "Nephele-hero-dark.mp4"
  )

  return (
    <Box>
      <video
        id="hero-video"
        width="100%"
        height="auto"
        src={src}
        playsInline
        autoPlay
        loop
        muted
      />
    </Box>
  )
}

export default EthVideo
