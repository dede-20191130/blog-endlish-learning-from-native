import Fields from "./fields";
import Frontmatter from "./frontmatter";

interface Node {
  id: string;
  fields: Fields;
  frontmatter: Frontmatter;
  html: string;
  excerpt?: string;
}

export default Node;
