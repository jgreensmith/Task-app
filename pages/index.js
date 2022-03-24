import { ExpandMore } from "@mui/icons-material";
import dbConnect from "../lib/dbConnect";
import Project from "../models/Project";

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, IconButton, Stack, toolbarClasses, Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Layout from "../components/Layout";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TimerIcon from '@mui/icons-material/Timer';
import GroupIcon from '@mui/icons-material/Group';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CommentIcon from '@mui/icons-material/Comment';
import Form from "../components/Form";



export default function Home({ projects }) {
  console.log(projects)


  return (
    <Layout>
      <Container maxWidth="sm">
        <Form />
        <Stack spacing={2}>
          <Card>
              <CardHeader
            avatar={
              <Avatar  aria-label="recipe">
                J
              </Avatar>
            }
            action={
              <>
              <GroupIcon />
              <Tooltip 
                sx={{[`&.${tooltipClasses.tooltip}`]: {
                  backgroundColor: "#fff"
                }}}
                title={
                  <Typography variant="button" >
                  Deadline: 2 days
                  </Typography>
                }
              >
                <TimerIcon />
              </Tooltip>
              
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
              </>
              
            }
            title="James Greensmith"
            subheader="time posted"
          />
          
             
                {/* <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
              />
           */}
          
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              I have a phatty boy task can people help me i really need som pals omg there is so much to do 
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Button aria-label="add to favorites">
              <EmojiPeopleIcon />Offer to Help
            </Button>
            
            <Button aria-label="add to favorites">
              <CommentIcon />Comment
            </Button>
          </CardActions>
        
        </Card>
          
        </Stack>
      </Container>
    </Layout>
  )
}
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Project.find({})
  const projects = result.map((doc) => {
    const project = doc.toObject()
    project._id = project._id.toString()
    return project
  })

  return { props: { projects: projects } }
}

