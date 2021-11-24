import React from "react";
import { Image, Button, Box, Text, Avatar, Flex, Icon } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export default function TestimonialCarousel(props) {
  const testimonials = [
    {
      text: "Had my first visit today as a new patient and I was very pleased. The office staff was helpful and friendly. Dr. Willis was beyond nice; she took the time to not only assess my medical issues but to answer my questions as well. 5 stars!",
      user: "Terrance A. Vandaerhook",
      city: "West Covina, CA",
    },
    {
      text: "I have been with this medical group for about 8 years. I really like the doctors and staff. Very professional and nice. Would highly recommend this facility to family and friends",
      user: "Maria Carrillo",
      city: "West Covina, CA",
    },
    {
      text: "I was having some issues in regards to a prior visit,the assistant manager Lisa Marie was SO helpful.She was genuinely concerned about the issues that I previously had,she took the time to make sure I was heard.Which in this day and age is so rare.It made me feel that they really want to do the best in regards to making their facility the best that it can be.I will definitely be returning to the facility and recommending it to others to.",
      user: "Sylvia Framer",
      city: "West Covina, CA",
    },
  ];
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
        <Box pos="relative" key={item.user} p="5">
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
              {item.text}
            </Text>
            <Flex align="center" mb="10">
              <Avatar src="/user.png" mr="3" />
              <Box>
                <Text textAlign="left" fontWeight="bold" color="brandBlue.700">
                  {item.user}
                </Text>
                <Text textAlign="left" color="gray.500" fontSize="sm">
                  {item.city}
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
