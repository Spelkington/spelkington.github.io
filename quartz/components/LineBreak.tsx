import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const LineBreak: QuartzComponent = ({}: QuartzComponentProps) => {
  return (
    <br />
  )
}

LineBreak.css = ``

export default (() => LineBreak) satisfies QuartzComponentConstructor
