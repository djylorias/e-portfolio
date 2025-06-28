import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import experienceTimelineElements from "./Data.tsx"
import { BriefcaseIcon } from "@phosphor-icons/react"

function Experience() {
    
    return (

        <div id="experience">
            <h1 className="experiences_title">Experiences</h1>
            <VerticalTimeline>
                {experienceTimelineElements.map((element) => {
                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            icon={<BriefcaseIcon/>}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p className="description">{element.description}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )

}

export default Experience