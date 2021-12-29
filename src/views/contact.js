import { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Image,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Alert,
  CloseButton,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Heading from "../components/Heading/Heading";
import { sanitize } from "../utils/miscellaneous";
// import { sendMail } from "../lib/contact-form-api";
import CardImg from "../components/CardImg/CardImg";
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiPrinterLine,
  RiTimeLine,
  RiDirectionLine,
  RiCalendarEventLine,
} from "react-icons/ri";

export default function Contact({ contactData, locationTabData }) {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  const contact = contactData?.contactData?.contact;

  return (
    <Box className="container">
      {/* side by side content */}
      <Box className="row align-items-center" pt={10} pb={10}>
        <Box className="col-md-6">
          <Heading
            primary={contact?.contactHeading?.primary}
            secondary={contact?.contactHeading?.secondary}
          />
          <Text
            dangerouslySetInnerHTML={{
              __html: sanitize(contact?.contactContent ?? null),
            }}
          />
          <style jsx>{`
            form {
              font-size: 1.2em;
            }

            label {
              display: block;
              margin-bottom: 0.2em;
            }

            input,
            textarea {
              width: 100%;
              padding: 0.8em;
            }

            button {
              color: white;
              font-size: 1em;
              background-color: blueviolet;
              padding: 0.8em 1em;
              border: none;
              border-radius: 0.2em;
            }
          `}</style>
          <form onSubmit={handleOnSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </p>
            <p>
              <button>Submit</button>
            </p>
          </form>
          {/* <form onSubmit={handleSubmit} display={showForm ? "block" : "none"}>
            <Box className="row" mt={10}>
              <Box className="col-md-6" mb={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="fName">First Name</FormLabel>
                  <Input
                    type="text"
                    variant="filled"
                    id="fName"
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box className="col-md-6" mb={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="lName">Last Name</FormLabel>
                  <Input
                    type="text"
                    variant="filled"
                    id="lName"
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box className="col-md-6" mb={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    variant="filled"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box className="col-md-6" mb={4}>
                <FormControl required>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <Input
                    type="text"
                    variant="filled"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box className="col-md-12" mb={4}>
                <FormControl>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    variant="filled"
                    placeholder="Type in your message here"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box className="col-md-12" mb={4}>
                <Button type="submit" variant="solid" colorScheme="brandBlue">
                  Send Message
                </Button>
              </Box>
            </Box>
          </form>
          <Alert
            status="error"
            display={showFailuresMessage ? "block" : "none"}
          >
            <AlertIcon />
            There was an error processing your request
          </Alert>
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            display={showSuccessMessage ? "block" : "none"}
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Application submitted!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for submitting your application. Our team will get back to
              you soon.
            </AlertDescription>
          </Alert> */}
        </Box>
        <Box className="col-md-6">
          <Image
            src={contact?.contactImage?.mediaItemUrl}
            alt={contact?.contactHeading?.primary}
          />
        </Box>
      </Box>
      <Box className="row" mt={5}>
        {locationTabData?.location_tabs?.locationList?.locationInfo.map(
          (office, i) => (
            <Box className="col-md-4" key={i} mb={8}>
              <CardImg
                height="226px"
                src={`/locations/${office.locationImage.slug}.png`}
              >
                <Flex align="flex-end" justifyContent="space-between" w="100%">
                  <Box>
                    <Flex align="center">
                      <Text
                        color="white"
                        fontSize="2xl"
                        fontWeight="bold"
                        mr={5}
                      >
                        {office.location}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </CardImg>
              <Flex mt={4} mb={2}>
                <Icon
                  color="blackAlpha.800"
                  as={RiMapPin2Line}
                  w="18px"
                  h="18px"
                  mr={2}
                />
                <Text fontSize="sm">{office.address}</Text>
              </Flex>
              <Flex mb={2} align="center">
                <Flex align="center" mr="20px">
                  <Icon
                    color="blackAlpha.800"
                    as={RiPhoneLine}
                    w="18px"
                    h="18px"
                    mr={2}
                  />
                  <Text fontSize="sm">{office.phone}</Text>
                </Flex>
                <Flex align="center">
                  <Icon
                    color="blackAlpha.800"
                    as={RiPrinterLine}
                    w="18px"
                    h="18px"
                    mr={2}
                  />
                  <Text fontSize="sm">{office.fax}</Text>
                </Flex>
              </Flex>
              <Flex mb={2} align="center">
                <Icon
                  color="blackAlpha.800"
                  as={RiTimeLine}
                  w="18px"
                  h="18px"
                  mr={2}
                />
                <Text fontSize="sm">{office.hours}</Text>
              </Flex>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
