import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Heading from "../../components/Heading/Heading";
import CardImg from "../../components/CardImg/CardImg";
import SubHeroBanner from "../../components/SubHeroBanner/SubHeroBanner";

export default function MedicalTeam() {
  const dep = [
    "Pediatrics",
    "General Practice",
    "Internal Medicine",
    "Physician Extenders",
  ];
  const doctors = [
    {
      name: "Steven Sun, M.D.",
      dep: "Pediatrics",
      location: "Anaheim",
      img: "pediatrics-1.jpg",
      bio: "Enthusiastic. This one word describes Dr. Sun’s approach to his role as a pediatrician. He is passionate about what he does, enjoys being around children, and aims to share his enthusiasm with his patients and their parents.<br/><br/>As a pediatrician, Dr. Sun has many responsibilities but his focus remains on education for his patients and their families. He firmly believes that by partnering with families, it yields the best results and empowers everyone involved. Dr. Sun also serves as a resource and guide for parents as they are the ones that have the daily interaction with the child and can have the most impact.<br/><br/>Dr. Sun treats his patients with kindness and compassion and ensures that his patients view him as a trustworthy partner. As Dr. Sun states, “I enjoy being around children, their sense of imagination and wonderment is simply contagious. I can learn a lot about a patient from just talking with them and this is the best part of my job.”<br/><br/>Dr. Sun received his medical degree from the University of Michigan and completed his residency at Loma Linda University Children’s Hospital.<br/><br/>When he is not at work, Dr. Sun enjoys playing card games and board games, doing origami, and watching history shows.",
    },
    {
      name: "Raquel Ynchausti, M.D.",
      dep: "Pediatrics",
      location: "West Covina",
      img: "pediatrics-2.jpg",
      bio: "Raquel Ynchausti, M.D. is a highly experienced and dedicated Pediatrician for over 47 years. Dr. Ynchausti graduated from University of Santo Tomas Faculty of Medicine & Surgery in 1967. She completed a residency at St. Jude Children’s Research Hospital.",
    },
    {
      name: "Ramya Chowdary, M.D.",
      dep: "Pediatrics",
      location: "Duarte",
      img: "pediatrics-3.jpg",
      bio: "Ramya Chowdary, M.D. is a pediatrician committed to helping build a healthy community. She graduated from Ross University School of Medicine and completed her pediatric residency from Crozer-Chester Medical Center near Philadephia, which included training at the Nemours A.I duPont Hospital for Children. Her cultural background combined with her training in a community-based program plus a tertiary care center, helps her serve patients from various backgrounds and environments. Knowing that no two patients are the same and the social determinants of health are central to her care for each patient. While managing children’s illnesses, she also emphasizes well-care, empowering patients and families so that kids can become healthy adults.",
    },
    {
      name: "Joanna Tukaj, M.D.",
      dep: "Pediatrics",
      location: "Covina",
      img: "pediatrics-4.jpg",
      bio: "Joanna Tukaj, M.D. is a hardworking and committed physician who has a very good relationship with her patients and parents. Dr. Tukaj is board-certified Pediatrician since 1996. She graduated from Collegium Medicum, University Jagiellonski in Poland and completed her residency at White Memorial Medical Center. Dr. Tukaj is bilingual in Polish and Spanish.",
    },
    {
      name: "Maria Khalatian, M.D.",
      dep: "Pediatrics",
      location: "El Monte",
      img: "pediatrics-5.jpg",
      bio: "Maria Eugenia Khalatian MD is a board certified pediatrician with over 40 years of experience. She is passionate about working with patients and their parents. Her work with the management and control of asthma in children has enabled many patients to maintain regular school attendance. Dr. Maria graduated from the Universidad Autónoma de Guadalajara and completed her residency at Mount Sinai Hospital in Chicago.",
    },
    {
      name: "Delfin L. Dano, M.D.",
      dep: "Pediatrics",
      location: "Rialto",
      img: "pediatrics-6.jpg",
      bio: "Delfin L. Dano, M.D. is a Pediatrician with 43 years experience who specializes in the health care of children. Dr. Dano graduated from Far Eastern University, Philippines in 1975. He completed a residency at Charles R Drew University. In addition to English, Dr. Dano is bilingual in Filipino, Spanish and German.",
    },
    {
      name: "Adelaide B. Willis, M.D.",
      dep: "General Practice",
      location: "Covina",
      img: "general-practice-1.jpg",
      bio: "Adelaide Willis, M.D. is an extremely caring and dedicated physician. She has been practicing as Family Practice Physician for over 30 years. Dr. Willis earned her medical degree from Charles R. Drew/UCLA School of  Medicine. Dr. Willis completed her residency in Family Medicine and a fellowship with emphasis in Geriatrics at King/Drew Medical Center Los Angeles, CA.",
    },
    {
      name: "Michael Bang, M.D.",
      dep: "General Practice",
      location: "Covina",
      img: "general-practice-2.jpg",
      bio: "Michael Bang, M.D. is a highly motivated physician that demonstrates excellence in all aspects of his service. He has practiced as a Family Practitioner for over 15 years. Dr. Bang earned his medical degree at University of Maryland Medical School and completed his training at University of Southern California. He offers physical examinations, cholesterol testing, wound care, immunizations, skin biopsies, fitness programs, stress reduction plans, ongoing evaluations and many other services. His interests are in family practice and urgent care.",
    },
    {
      name: "Khaled Mawaheb, M.D.",
      dep: "General Practice",
      location: "Covina",
      img: "general-practice-3.jpg",
      bio: "Khaled Mawaheb, M.D. is an experienced board-certified family practitioner that brings 25 years of clinical experience to Mayflower Medical Group. He is a member of a number of professional organizations, including American Academy of Family Physicians and American Board of Family Medicine.  Dr. Mawaheb is a graduate of Cairo University and completed his residency at the University of California, Davis.  It is Dr. Mawaheb’s foremost goal to provide excellence in service for all of his patients.  He enjoys seeing patients from newborns to geriatric and is fluent in Arabic.",
    },
    {
      name: "Jesus Arenas, M.D.",
      dep: "General Practice",
      location: "La Puente",
      img: "general-practice-4.jpg",
      bio: "Jesus Arenas, M.D. is a highly experienced and dedicated general practice physician that brings over 30 years of experience to Mayflower Medical Group. He is committed to providing exceptional care to his patients. Dr. Arenas earned his medical degree at Stanford University School of Medicine and completed his training at University of Southern California, LA County. Dr. Arenas does not just treat the condition; he strives to meet his patients’ needs with compassion and respect. He enjoys all aspects of family medicine and is fluent in Spanish.",
    },
    {
      name: "Elsayed Elrakabawy, M.D.",
      dep: "Internal Medicine",
      location: "Anaheim",
      img: "internal-medicine-1.jpg",
      bio: "Dr. Elrakabawy received his Medical Degree with honors, from the University of Alexandria Medical School in Egypt, and completed his internship and residency at Kingsbrook Medical Center in New York. Dr. Elrakabawy enjoys all aspects of Internal Medicine and is fluent in Arabic. He believes the best way for patients to have better health is to educate them, as well regarding their condition thereby enhancing patient involvement especially in this information era.",
    },
    {
      name: "Eugene Symaco, M.D.",
      dep: "Internal Medicine",
      location: "Covina",
      img: "internal-medicine-2.jpg",
      bio: "Eugene Symaco, MD is an internal medicine physician who is striving in providing the best possible healthcare for his patients. He believes the best way for patients to have better health is to educate them as well regarding their condition thereby enhancing patient involvement especially in this information era. He did his residency in Monmouth Medical Center in New Jersey after earning his medical degree from the University of the Philippines and has exposure to both private and public clinical settings. He is also fluent in Tagalog.",
    },
    {
      name: "Randy Taylor, M.D.",
      dep: "Internal Medicine",
      location: "Covina",
      img: "internal-medicine-3.jpg",
      bio: "Randy Taylor, M.D. is a highly motivated physician with versatile talents and sincere heart. He is board certified Internal Medicine Physician with over 30 years of experience. Dr. Taylor received his medical degree from Boston University School of Medicine. He then completed his residency at Martin Luther King General Hospital, Los Angeles, California. His approach is to listen respectfully to the needs of all his patients.",
    },
    {
      name: "Lina Dela Cruz, M.D.",
      dep: "Internal Medicine",
      location: "West Covina",
      img: "internal-medicine-4.jpg",
      bio: "Lina Dela Cruz, M.D. is board-certified in Internal Medicine. Dr. Dela Cruz graduated from Lyceum Northwestern University in the Philippines in 1989 and completed her residency at Capital Health System, Helene Fuld Campus in New Jersey. She has been in practice for 20 years and believes the most important aspect of being a physician is to have heartfelt compassion and respect for each of her patients. Professionally, her interests include asthma management and women’s health and she is dedicated to providing the highest quality of care to her patients. Dr. Dela Cruz is fluent in Tagalog.",
    },
  ];
  return (
    <>
      <SubHeroBanner h1="Medical Team" bg="/medical-team-banner.jpg" />
      <Box className="container" my={10}>
        <Box className="row">
          <Box className="col-md-12">
            <Heading primary="Team work does dream work" secondary="Our Team" />
            <Text>
              Finding the right physician is one of the most important health
              care decisions you can make. At Mayflower, we offer a large
              selection of highly qualified providers serving the communities of
              San Gabriel Valley and San Bernadino County. Our Providers
              practice in a variety of settings, from hospitals to
              multi-specialty offices to private practice offices. A team member
              will be there when you call and can give you the answers you need.
              Choose freely between any of our health care professionals for
              your availability and convenience.
              <br />
              <br />
            </Text>
            {dep.map((dept) => (
              <Box key={dept} mb="50px">
                <Text fontSize="2xl" fontWeight="800" mb="20px">
                  {dept}
                </Text>
                <Box className="row">
                  {doctors.map((doc, i) =>
                    dept === doc.dep ? (
                      <Box className="col-md-2" key={i}>
                        <CardImg src={`/medical-team/${doc.img}`}>
                          <Text color="white" fontSize="md" fontWeight="bold">
                            {doc.name}
                          </Text>
                          <Text color="whiteAlpha.700" fontSize="sm">
                            {doc.location}
                          </Text>
                        </CardImg>
                      </Box>
                    ) : (
                      ""
                    )
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
