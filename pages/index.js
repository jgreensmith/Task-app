import dbConnect from "../lib/dbConnect";
import Project from "../models/Project";

import { Container } from "@mui/material";
import Layout from "../components/Layout";

import Form from "../components/Form";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";



export default function Home({ projects }) {
  const [currentId, setCurrentId] = useState(null)


  return (
    <Layout>
      <Container maxWidth="sm">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <ProjectCard projects={projects} setCurrentId={setCurrentId} />
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

