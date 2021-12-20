import { Image, Button, Box, Text, Avatar, Flex, Icon } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export default function TestimonialCarousel({ testimonialData }) {
  const testimonials =
    testimonialData.testimonials.testimonialCarousel.testimonials;
  return (
    <Carousel
      showThumbs={false}
      emulateTouch={true}
      style={{ position: "relative" }}
      showStatus={false}
      showArrows={false}
      // renderArrowPrev={(onClickHandler, hasPrev, label) =>
      //   hasPrev && (
      //     <Button
      //       type="button"
      //       onClick={onClickHandler}
      //       title={label}
      //       className="controls btn-left"
      //     >
      //       <Icon w={6} h={6} color="brandBlue.700" as={RiArrowLeftSLine} />
      //     </Button>
      //   )
      // }
      // renderArrowNext={(onClickHandler, hasNext, label) =>
      //   hasNext && (
      //     <Button
      //       type="button"
      //       onClick={onClickHandler}
      //       title={label}
      //       className="controls btn-right"
      //     >
      //       <Icon w={6} h={6} color="brandBlue.700" as={RiArrowRightSLine} />
      //     </Button>
      //   )
      // }
    >
      {testimonials.map((item) => (
        <Box pos="relative" key={item.clientName} p="5">
          <Image
            src="/icons/quote.svg"
            alt="Quote"
            pos="absolute"
            style={{ width: "50px" }}
            height="50px"
            left=" 0"
            top="-10px"
          />
          <Box>
            <Text textAlign="left" mb="7">
              {item.comment}
            </Text>
            <Flex align="center" mb="10">
              <Avatar src="/user.png" mr="3" />
              <Box>
                <Text textAlign="left" fontWeight="bold" color="brandBlue.700">
                  {item.clientName}
                </Text>
                <Text textAlign="left" color="gray.500" fontSize="sm">
                  {item.clientLocation}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      ))}
      <style jsx>{`
        .controls {
          width: 40px;
          height: 40px;
          background: #c6dfea;
          border-radius: 100%;
          color: #154878;
          position: absolute;
          z-index: 4;
          left: 0;
          bottom: 0;
        }

        .controls.btn-right {
          left: 50px;
        }
      `}</style>
    </Carousel>
  );
}
