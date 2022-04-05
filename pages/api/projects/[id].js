import dbConnect from "../../../lib/dbConnect"
import Project from "../../../models/Project";

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'DELETE':
            try {
                const { id } = req.params;
                // if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
        
                await Project.findByIdAndDelete(id)
                
                res.status(200).json({ success: true, data: {}})
              } catch (error) {
                res.status(400).json({ success: false })
              }
            break;
    }
}