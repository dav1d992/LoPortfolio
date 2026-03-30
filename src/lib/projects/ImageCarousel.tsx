import { useState, useRef } from "react";
import { Box, IconButton, HStack } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";

type ImageCarouselProps = {
  images: { src: string; alt: string }[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [sliding, setSliding] = useState(false);
  const dirRef = useRef(1);
  const controls = useAnimation();

  const slide = async (dir: number) => {
    if (sliding) return;
    dirRef.current = dir;
    const nextIndex =
      dir > 0
        ? current === images.length - 1 ? 0 : current + 1
        : current === 0 ? images.length - 1 : current - 1;

    setPrev(current);
    setCurrent(nextIndex);
    setSliding(true);

    await controls.start({
      x: dir > 0 ? "-100%" : "100%",
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    });

    setPrev(null);
    setSliding(false);
    controls.set({ x: "0%" });
  };

  const slideTo = async (target: number) => {
    if (sliding || target === current) return;
    const dir = target > current ? 1 : -1;
    dirRef.current = dir;
    setPrev(current);
    setCurrent(target);
    setSliding(true);

    await controls.start({
      x: dir > 0 ? "-100%" : "100%",
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    });

    setPrev(null);
    setSliding(false);
    controls.set({ x: "0%" });
  };

  if (images.length === 0) return null;

  return (
    <Box position="relative" width="100%" overflow="hidden" borderRadius="md">
      <Box
        position="relative"
        width="100%"
        height={["200px", "300px", "450px"]}
      >
        <motion.div
          animate={controls}
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Current image */}
          <div
            style={{
              width: "100%",
              height: "100%",
              flexShrink: 0,
              backgroundImage: `url(${images[current].src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "var(--chakra-radii-md)",
              position: "absolute",
              top: 0,
              left: sliding ? (dirRef.current > 0 ? "100%" : "-100%") : 0,
            }}
          />
          {/* Previous (outgoing) image */}
          {prev !== null && (
            <div
              style={{
                width: "100%",
                height: "100%",
                flexShrink: 0,
                backgroundImage: `url(${images[prev].src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "var(--chakra-radii-md)",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          )}
        </motion.div>
      </Box>

      {images.length > 1 && (
        <>
          <IconButton
            aria-label="Previous image"
            icon={<FiChevronLeft />}
            position="absolute"
            left={2}
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slide(-1)}
            size="sm"
            borderRadius="full"
            opacity={0.8}
            _hover={{ opacity: 1 }}
          />
          <IconButton
            aria-label="Next image"
            icon={<FiChevronRight />}
            position="absolute"
            right={2}
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slide(1)}
            size="sm"
            borderRadius="full"
            opacity={0.8}
            _hover={{ opacity: 1 }}
          />

          <HStack justify="center" gap={1} mt={2} pb={1}>
            {images.map((_, i) => (
              <Box
                key={i}
                width={2}
                height={2}
                borderRadius="full"
                bg={i === current ? "blue.400" : "whiteAlpha.400"}
                cursor="pointer"
                onClick={() => {
                  if (sliding || i === current) return;
                  slideTo(i);
                }}
                transition="background 0.2s"
              />
            ))}
          </HStack>
        </>
      )}
    </Box>
  );
};

export default ImageCarousel;
