interface Study {
    id: number,
    formation: string, 
    location: string, 
    description: string,
    date: string,
    icon: string
}

let studyTimelineElements: Study[] = [
    {
        id: 1,
        formation: "BUT Informatique",
        location: "IUT A de Lille",
        description: "Bachelor Universitaire de Technologie Option Réalisation d'Application",
        date: "Septembre 2022 - Août 2025",
        icon: "GraduationCap"
    },
    {
        id: 1,
        formation: "Baccalauréat STI2D",
        location: "Lycée Technologique César Baggio à Lille",
        description: "Baccalauréat STI2D Option Système d'Information et Numérique",
        date: "Septembre 2020 - Juin 2022",
        icon: "GraduationCap"
    }
]

export default studyTimelineElements