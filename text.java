import whyKirbyy.*;
import java.util.*;
import org.apache.commons.collections4.map.MultiValueMap;

public class Main {

    static class Project {
        String name;
        String details;
        List<String> techStack;
        List<String> links;
        String status;

        public Project(String name, String details, List<String> techStack, List<String> links, String status) {
            this.name = name;
            this.details = details;
            this.techStack = techStack;
            this.links = links;
            this.status = status;
        }
    }

    public static void main(String[] args) {
        // Setting up navigation options
        Map<String, Object> NAVIGATION = new HashMap<>();
        NAVIGATION.put("nav_options", Arrays.asList(whyKirbyy.about(), whyKirbyy.projects(), whyKirbyy.experience(), whyKirbyy.info()));
        NAVIGATION.put("language_options", whyKirbyy.options());

        whyKirbyy.setName("Tim Schmid");

        // About content
        Map<String, Object> aboutContent = new HashMap<>();
        aboutContent.put("tim_schmid", """
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
        """);
        aboutContent.put("tech_stack", Arrays.asList("Python", "Java", "TypeScript", "C", "more"));
        aboutContent.put("links", Map.of("github_link", "github", "resume_download", "resume"));

        // Projects content
        List<Project> projectsContent = Arrays.asList(
            new Project(
                "portfolio site",
                """
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                """,
                Arrays.asList("Python", "Flask", "JavaScript", "HTML", "CSS"),
                Collections.singletonList("whykirbyy.ch"),
                "completed"
            ),
            new Project(
                "portfolio package",
                """
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                """,
                Arrays.asList("Python", "Flask", "JavaScript", "HTML", "CSS"),
                Collections.singletonList("whykirbyy.ch"),
                "completed"
            ),
            new Project(
                "nudelsoup",
                """
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                """,
                Arrays.asList("Python", "Flask", "JavaScript", "HTML", "CSS"),
                Arrays.asList("nudelsoup.com", "github frontend", "github backend"),
                "work in progress"
            ),
            new Project(
                "sundtrack",
                """
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                """,
                Arrays.asList("Python", "Flask", "JavaScript", "HTML", "CSS"),
                Arrays.asList("nudelsoup.com", "github frontend", "github backend"),
                "work in progress"
            )
        );

        // Background graph
        MultiValueMap<String, Map<String, Object>> backgroundGraph = new MultiValueMap<>();
        backgroundGraph.put("software_engineer", Map.of(
            "role", "Software Engineer Internship",
            "organization", "TechCorp Inc.",
            "time_period", Map.of("start", "2022-06", "end", "2023-12"),
            "description", "Built scalable backend services.",
            "tech_stack", Arrays.asList("Python", "Django", "PostgreSQL", "Docker")
        ));
        backgroundGraph.put("studies", Map.of(
            "role", "Student",
            "university", "University of Example",
            "major", "Computer Science",
            "minor", "Mathematics",
            "time_period", Map.of("start", "2018-09", "end", "2022-05"),
            "description", "Completed a degree in Computer Science with a focus on AI.",
            "grade_average", 5
        ));

        // Info content
        String infoContent = "This is text";

        // Setting up whyKirbyy
        whyKirbyy.setAbout(aboutContent);
        whyKirbyy.setProjects(projectsContent);
        whyKirbyy.setBackground(backgroundGraph);
        whyKirbyy.setInfo(infoContent);

        // Generate resume
        Object resume = whyKirbyy.resume();
    }
}
