from whykirbyy import Whykirbyy
from typing import Dict, List, Union
from dataclasses import dataclass
import networkx as nx


NAVIGATION: Dict[str, Union[List[str], str]] = {
    "nav_options": ["about", "projects", "experience", "info"],
    "language_options": "options",
}
whykirbyy_instance = Whykirbyy("Tim Schmid")
whykirbyy_instance.set_name()

about_content: Dict[str, Union[str, List[str], Dict[str, str]]] = {
    "tim_schimd": """Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.""",
    "tech_stack": ["Python", "Java", "TypeScript", "C", "more"],
    "links": {
        "github_link": "github",
        "resume_download": "resume",
    },
}

@dataclass
class Project:
    name: str
    details: str
    tech_stack: List[str]
    links: List[str]
    status: str

projects_content: List[Project] = [
    Project(
        name="portfolio site",
        details=(
            """
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            """
        ),
        tech_stack=["Python", "Flask", "JavaScript", "HTML", "CSS"],
        links=["whykirbyy.ch"],
        status="completed",
    ),

    Project(
        name="portfolio package",
        details=(
            """
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            """
        ),
        tech_stack=["Python", "Flask", "JavaScript", "HTML", "CSS"],
        links=["whykirbyy.ch"],
        status="completed",
    ),

    Project(
        name="nudelsoup",
        details=(
            """
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            """
        ),
        tech_stack=["Python", "Flask", "JavaScript", "HTML", "CSS"],
        links=["nudelsoup.com", "github frontend", "github backend"],
        status="work in progress",
    ),

    Project(
        name="sundtrack",
        details=(
            """
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            """
        ),
        tech_stack=["Python", "Flask", "JavaScript", "HTML", "CSS"],
        links=["nudelsoup.com", "github frontend", "github backend"],
        status="work in progress",
    ),
]

background_graph: nx.DiGraph = nx.DiGraph()
background_graph.add_node(
    "software_engineer",
    role="Software Engineer Internship",
    organization="TechCorp Inc.",
    time_period={"start": "2022-06", "end": "2023-12"},
    description="Built scalable backend services.",
    tech_stack=["Python", "Django", "PostgreSQL", "Docker"],
)

background_graph.add_node(
    "studies",
    role="Student",
    university="University of Example",
    major="Computer Science",
    minor="Mathematics",
    time_period={"start": "2018-09", "end": "2022-05"},
    description="Completed a degree in Computer Science with a focus on AI.",
    grade_average=5,
)

info_content: str = """This is text"""

if __name__ == "__main__":
    whykirbyy_instance.set_about(about_content)
    whykirbyy_instance.set_projects(projects_content)
    whykirbyy_instance.set_background(background_graph)
    whykirbyy_instance.set_info(info_content)

    resume = whykirbyy_instance.resume()
