import { createContext } from "react";


export const ProjectContext = createContext()

const ProjectContextProvider = (props) => {
    return (
        <ProjectContext.Provider>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider 