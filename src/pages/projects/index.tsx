import { Box, Heading, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import MotionFlex from "../../lib/motion/MotionFlex";
import ImageCarousel from "../../lib/projects/ImageCarousel";

const ProjectCard = ({
  title,
  description,
  liveUrl,
  githubUrl,
  tech,
  images,
}: {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  tech: string[];
  images: { src: string; alt: string }[];
}) => (
  <MotionFlex
    flexDirection="column"
    gap={4}
    variants={{
      before: { opacity: 0, y: 20, transition: { type: "spring" } },
      after: { opacity: 1, y: 0, transition: { type: "spring" } },
    }}
    initial="before"
    animate="after"
    borderWidth="1px"
    borderRadius="lg"
    padding={6}
    backgroundColor="rgba(100, 200, 200, 0.05)"
    _hover={{
      backgroundColor: "rgba(100, 200, 200, 0.1)",
      transform: "translateY(-2px)",
    }}
    transition={{ duration: 0.2 }}
  >
    <ImageCarousel images={images} />

    <Heading as="h3" size="lg">
      {title}
    </Heading>
    <Text fontSize="md" lineHeight="1.6">
      {description}
    </Text>

    <VStack alignItems="flex-start" gap={2}>
      <Heading as="h4" size="sm">
        Tech Stack:
      </Heading>
      <HStack wrap="wrap" gap={2}>
        {tech.map((t) => (
          <Box
            key={t}
            px={3}
            py={1.5}
            bg="brand.700"
            borderRadius="full"
            fontSize="sm"
            fontWeight="medium"
          >
            {t}
          </Box>
        ))}
      </HStack>
    </VStack>

    <HStack gap={4} pt={2}>
      <Button
        as="a"
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        colorScheme="blue"
        rightIcon={<FiExternalLink />}
      >
        Live Demo
      </Button>
      <Button
        as="a"
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        variant="outline"
        rightIcon={<FiGithub style={{ fontSize: "16px" }} />}
      >
        GitHub
      </Button>
    </HStack>
  </MotionFlex>
);

const ProjectsPage = () => {
  const projects = [
    {
      title: "ChessMeOut",
      description:
        "An interactive chess analysis tool designed for players to study games and explore openings. Features an opening selector to learn popular chess variations and analyze positions.",
      liveUrl: "https://chess.lokeytech.com/",
      githubUrl: "https://github.com/dav1d992/ChessMeOut",
      tech: ["Angular 21", "TypeScript", "SCSS"],
      images: [
        { src: "/assets/projects/4.Chess-Start.png", alt: "Chess board starting position" },
        { src: "/assets/projects/5.Chess-Mid.png", alt: "Mid-game analysis" },
      ],
    },
    {
      title: "Planning Board App",
      description:
        "A real-time planning poker app built for Scrum teams to collaborate and estimate tasks together. Create or join sessions via unique links, vote on story points, and reveal estimates in real time. No login required—just enter your name and start estimating!",
      liveUrl: "https://planning.lokeytech.com/",
      githubUrl: "https://github.com/dav1d992/Planning",
      tech: ["Angular 19", "Firebase", "TypeScript", "SCSS"],
      images: [
        { src: "/assets/projects/1.Create-Planning-Room.png", alt: "Create a planning room" },
        { src: "/assets/projects/2.Planning-Board-Vote-Time.png", alt: "Vote on story points" },
        { src: "/assets/projects/3.Planning-Board-Reveal.png", alt: "Reveal estimates" },
      ],
    },
  ];

  return (
    <MotionFlex
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Box>
        <Box marginBottom={22}>
          <Heading as="h1" size="xl" marginBottom={2}>
            Projects
          </Heading>
          <Heading as="h3" size="md" marginBottom={2}>
            A selection of projects I&apos;ve built showcasing my skills in frontend
            development, real-time applications, and interactive tools.
          </Heading>
        </Box>

        <VStack gap={8} width="100%">
          {projects.map((project) => (
            <Box key={project.title} width="100%">
              <ProjectCard {...project} />
            </Box>
          ))}
        </VStack>
      </Box>
    </MotionFlex>
  );
};

export default ProjectsPage;
