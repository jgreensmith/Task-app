import dbConnect from "../lib/dbConnect";
import Project from "../models/Project";

import { Container } from "@mui/material";
import Layout from "../components/Layout";

import Form from "../components/Form";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Home() {
  const [projects, setProjects] = useState([])
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  
  const fetchProjects = async () => {
    const res = await fetch('/api/projects')
    const data = await res.json()
    setProjects(data)
  }
  useEffect(() => {
    fetchProjects()
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(projects)

  const handleDelete = async (id) => {
    setAnchorEl(null);

    const res = await fetch(`/api/projects/${id}`, {
      method: 'DELETE'
    })

    const data = await res.json()
    console.log(data)
    fetchProjects()  
  }

  return (
    <Layout>
      <Container maxWidth="sm">
        <Form  />
        <ProjectCard
          projects={projects} 
          open={open}
          handleDelete={handleDelete}
          handleClose={handleClose} 
          handleClick={handleClick}
          anchorEl={anchorEl}
        />
      </Container>
    </Layout>
  )
}
// export async function getServerSideProps() {
//   await dbConnect()

//   /* find all the data in our database */
//   const result = await Project.find({})
//   const projects = result.map((doc) => {
//     const project = doc.toObject()
//     project._id = project._id.toString()
//     return project
//   })

//   return { props: { projects: projects } }
// }

