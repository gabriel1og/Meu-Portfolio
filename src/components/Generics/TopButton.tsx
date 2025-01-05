import { TiArrowUpThick } from "react-icons/ti";
import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box position="fixed" bottom="1rem" right="1rem" zIndex={1}>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              w="45px"
              h="45px"
              borderRadius="50%"
              cursor="pointer"
              color="#fff"
              bg="transparent"
              border="2px solid #fff"
              onClick={scrollTop}
              _hover={{ transform: "scale(1.02)" }}
            >
              <TiArrowUpThick className="icon" size={28} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
