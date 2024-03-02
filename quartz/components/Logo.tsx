import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const Logo: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <img class="page-logo" src={baseDir + "/static/title_icon.png"} alt=""/>
  )
}

Logo.css = `
.page-logo { }
`

export default (() => Logo) satisfies QuartzComponentConstructor
