import { BriefcaseIcon } from "@phosphor-icons/react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import studiesTimelineElements from "./Data.tsx"

function Studies() {
    
    let iconStyle = {background: "#FFFFFF"}
    
    return (
        <div>
        <h1 className="studies_title">Etudes</h1>
            <VerticalTimeline>
                {studiesTimelineElements.map((element) => {
                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            icon={<BriefcaseIcon size={64}/>}
                            iconStyle={iconStyle}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.formation}
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

export default Studies