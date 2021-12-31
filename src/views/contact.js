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
  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    setButtonText("Sending Message...");
    const res = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setButtonText("Send Message");
      return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    setShowForm(false);
    setButtonText("Message Sent");
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
          {/* <form onSubmit={handleOnSubmit}>
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
          </form> */}
          <form
            onSubmit={handleOnSubmit}
            style={showForm ? { display: "block" } : { display: "none" }}
          >
            <Box className="row" mt={10}>
              <Box className="col-md-6" mb={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="fName">First Name</FormLabel>
                  <Input
                    type="text"
                    variant="filled"
                    id="fName"
                    name="fName"
                    // value={fName}
                    // onChange={(e) => setFName(e.target.value)}
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
                    name="lName"
                    // value={lName}
                    // onChange={(e) => setLName(e.target.value)}
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
                    name="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box className="col-md-6" mb={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <Input
                    type="text"
                    variant="filled"
                    id="subject"
                    name="subject"
                    // value={subject}
                    // onChange={(e) => setSubject(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box className="col-md-12" mb={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    variant="filled"
                    placeholder="Type in your message here"
                    id="message"
                    name="message"
                    // value={message}
                    // onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box className="col-md-12" mb={4}>
                <Button type="submit" variant="solid" colorScheme="brandBlue">
                  {buttonText}
                </Button>
              </Box>
            </Box>
          </form>
          <Alert status="error" display={showFailureMessage ? "block" : "none"}>
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
            mt="20px"
            borderRadius={"lg"}
            display={showSuccessMessage ? "block" : "none"}
          >
            <AlertIcon height={"40px"} width={"auto"} mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Your Message Sent!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for contacting Mayflower medical Group. Our team will get
              back to you soon.
            </AlertDescription>
          </Alert>
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
