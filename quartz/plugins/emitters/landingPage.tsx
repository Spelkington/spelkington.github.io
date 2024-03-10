import path from "path"
import { visit } from "unist-util-visit"
import { Root } from "hast"
import { VFile } from "vfile"
import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { Argv } from "../../util/ctx"
import { FilePath, isRelativeURL, joinSegments, pathToRoot } from "../../util/path"
import { landingPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { Content } from "../../components"
import chalk from "chalk"
import { write } from "./helpers"
import DepGraph from "../../depgraph"

// get all the dependencies for the markdown file
// eg. images, scripts, stylesheets, transclusions
const parseDependencies = (argv: Argv, hast: Root, file: VFile): string[] => {
  const dependencies: string[] = []

  visit(hast, "element", (elem): void => {
    let ref: string | null = null

    if (
      ["script", "img", "audio", "video", "source", "iframe"].includes(elem.tagName) &&
      elem?.properties?.src
    ) {
      ref = elem.properties.src.toString()
    } else if (["a", "link"].includes(elem.tagName) && elem?.properties?.href) {
      // transclusions will create a tags with relative hrefs
      ref = elem.properties.href.toString()
    }

    // if it is a relative url, its a local file and we need to add
    // it to the dependency graph. otherwise, ignore
    if (ref === null || !isRelativeURL(ref)) {
      return
    }

    let fp = path.join(file.data.filePath!, path.relative(argv.directory, ref)).replace(/\\/g, "/")
    // markdown files have the .md extension stripped in hrefs, add it back here
    if (!fp.split("/").pop()?.includes(".")) {
      fp += ".md"
    }
    dependencies.push(fp)
  })

  return dependencies
}

export const LandingPage: QuartzEmitterPlugin<Partial<FullPageLayout>> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...landingPageLayout,
    pageBody: Content(),
    ...userOpts,
  }

  const { head: Head, header, beforeBody, pageBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  return {
    name: "LandingPage",
    getQuartzComponents() {
      return [Head, Header, Body, ...header, ...beforeBody, pageBody, ...left, ...right, Footer]
    },
    async getDependencyGraph(ctx, content, _resources) {
      // TODO implement
      return new DepGraph<FilePath>()
    },
    async emit(ctx, content, resources): Promise<FilePath[]> {
      const fps: FilePath[] = []
      const allFiles = content.map((c) => c[1].data)
      const cfg = ctx.cfg.configuration

      // Iterate through all files in the content directory
      for (const [tree, file] of content) {

        // Check to see if the slug is the root-level index page
        const slug = file.data.slug!
        if (slug == "index") {
          console.log(
            chalk.yellow(
              `\nEmitting landing page for ${slug} at ${path.join(ctx.argv.output, slug + ".html")}`,
            ),
          )

          const externalResources = pageResources(pathToRoot(slug), resources)
          const componentData: QuartzComponentProps = {
            fileData: file.data,
            externalResources,
            cfg,
            children: [],
            tree,
            allFiles,
          }

          const content = renderPage(cfg, slug, componentData, opts, externalResources)
          const fp = await write({
            ctx,
            content,
            slug,
            ext: ".html",
          })

          fps.push(fp)
        }
      }
      return fps
    },
  }
}
