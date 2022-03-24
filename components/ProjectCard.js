import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, toolbarClasses, Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TimerIcon from '@mui/icons-material/Timer';
import GroupIcon from '@mui/icons-material/Group';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import CommentIcon from '@mui/icons-material/Comment';
import { ExpandMore } from "@mui/icons-material";


export default function ProjectCard({projects}) {
    return(
        <Stack spacing={2}>
          {
            projects.map((project, index) => (
              <Card key={index}>
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
                  title={project.title}
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
                {project.message}
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
            ))
          }
        
        
      </Stack> 
    )
}