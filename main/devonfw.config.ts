import { DevonfwConfig } from './models/devonfw-dists.model';

export let devonfwConfig: DevonfwConfig = {
    distributions: [
        {
            id: "C:\\Proyectos\\devonfw-dashboard-fork", 
            ideConfig: {
                basepath: "C:\\Proyectos\\devonfw-dashboard-fork",
                commands: "C:\\Proyectos\\devonfw-dashboard-fork\\scripts\\command",
                workspaces: "C:\\Proyectos\\devonfw-dashboard-fork\\workspaces"
            }
        },
        {
            id: "C:\\Proyectos\\devonfw-ide\\devonfw-ide-3.2.3", 
            ideConfig: {
                basepath: "C:\\Proyectos\\devonfw-ide\\devonfw-ide-3.2.3",
                commands: "C:\\Proyectos\\devonfw-ide\\devonfw-ide-3.2.3\\scripts\\command",
                workspaces: "C:\\Proyectos\\devonfw-ide\\devonfw-ide-3.2.3\\workspaces"
            }
        },
        {
            id: "C:\\Proyectos\\devonfw-ide\\devonfw-ide-3.2.5gf", 
            ideConfig: {
                basepath: "C:\\Proyectos\\devonfw-ide\\devonfw-ide-3.2.5gf",
                commands: "C:\\Proyectos\\devonfw-ide\\devonfw-ide-3.2.5gf\\scripts\\command",
                workspaces: "C:\\Proyectos\\devonfw-ide\\devonfw-ide-3.2.5gf\\workspaces"
            }
        }
    ]
};