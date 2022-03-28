import dbConnect from "../../lib/dbConnect"
import Project from "../../models/Project"

export default async function handler(req, res) {

  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const projects = await Project.find({}) /* find all the data in database */
        res.status(200).json({ success: true, data: projects })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
      
    case 'POST': 
      try {
        const project = await Project.create(req.body) /* create a new model in the database */
        res.status(201).json({ success: true, data: project })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    case 'DELETE':
      try {
        await Project.findByIdAndDelete(req.body)
        
        res.status(200).json({ success: true})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    default:
      res.status(400).json({ success: false })
      break;
  }
 
  
}
