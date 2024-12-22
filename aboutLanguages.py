from typing import Dict, List
from dataclasses import dataclass

NAVIGATION: Dict[str, List[str]] = {
    "nav_options" = ["home", "tools", "Python", "Java", "TypeScript", "C", "other"]
}

@dataclass
class category:
    name: str
