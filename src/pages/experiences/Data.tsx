interface Experience {
    id: number,
    title: string, 
    location: string, 
    description: string,
    buttonText: string,
    date: string,
    icon: string
}

let experienceTimelineElements: Experience[] = [
    {
        id: 1,
        title: "Developpeur Web en Alternance",
        location: "Bouygues Construction IT, Yvelines",
        description: "Plannification d'un nouveau projet et développement d'une application pour la gestion des communications internes.",
        buttonText: "button",
        date: "Septembre 2024 - aujourd'hui",
        icon: "BriefCase"
    },
    {
        id: 2,
        title: "Developpeur Web en Stage",
        location: "Bouygues Construction IT, Yvelines",
        description: "Proposition et développement d'une solution pour la gestion des incidents",
        buttonText: "button",
        date: "Avril 2024 - Juin 2024",
        icon: "BriefCase"
    },
    {
        id: 3,
        title: "Assistant Drive",
        location: "Cora Drive, Villeneuve d'Asq",
        description: "Préparation des articles, organisation des commandes, rapport client et mise en rayon",
        buttonText: "button",
        date: "Août 2022",
        icon: "BriefCase"
    }
]

export default experienceTimelineElements