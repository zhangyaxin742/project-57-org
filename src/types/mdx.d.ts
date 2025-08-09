declare module "*.mdx" {
  import { ComponentType } from "react";
  const MDXComponent: ComponentType<any>;
  export const meta: Record<string, any> | undefined;
  export const frontmatter: Record<string, any> | undefined;
  export default MDXComponent;
}