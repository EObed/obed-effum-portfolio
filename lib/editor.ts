import { projects } from "@/lib/projects"

/**
 * Every page section is presented as a file in the editor. The id is the DOM
 * id of the section, so the sidebar and status bar can follow the scroll.
 */
export type EditorFile = {
    id: string
    name: string
    lang: string
}

export const sectionFiles = {
    readme: { id: "readme", name: "README.md", lang: "markdown" },
    about: { id: "about", name: "about.md", lang: "markdown" },
    projects: { id: "projects", name: "projects/index.md", lang: "markdown" },
    skills: { id: "skills", name: "skills.ts", lang: "typescript" },
    solutions: { id: "solutions", name: "solutions.md", lang: "markdown" },
    contact: { id: "contact", name: "contact.sh", lang: "shell" },
} satisfies Record<string, EditorFile>

export const projectFiles: EditorFile[] = projects.map((p) => ({
    id: `project-${p.slug}`,
    name: `projects/${p.slug}.md`,
    lang: "markdown",
}))

/**
 * Document order. When several targets are in view the last one in this list
 * wins, so a project entry beats its enclosing projects section.
 */
export const allFiles: EditorFile[] = [
    sectionFiles.readme,
    sectionFiles.about,
    sectionFiles.projects,
    ...projectFiles,
    sectionFiles.skills,
    sectionFiles.solutions,
    sectionFiles.contact,
]

export const allFileIds = allFiles.map((f) => f.id)
