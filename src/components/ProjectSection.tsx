import { projects, Project } from "../utils/projectData";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const ProjectSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        My Projects
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
        }}>
        {projects.map((project: Project, index: number) => (
          <Card key={index}>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small" href={project.liveLink} target="_blank">Live Demo</Button>
              <Button size="small" href={project.githubLink} target="_blank">GitHub</Button>
            </CardActions> */}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectSection;
