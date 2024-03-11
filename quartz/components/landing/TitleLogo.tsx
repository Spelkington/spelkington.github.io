import { pathToRoot } from "quartz/util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "quartz/components/types"
import { classNames } from "quartz/util/lang"
import { i18n } from "quartz/i18n"

const PageLogo: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const imgSource = cfg?.pageLogo
  return (
    <img
      class={classNames(displayClass, "title-logo")}
      style={{ width: "15em"}}
      src={imgSource}
      alt={i18n(cfg.locale).propertyDefaults.title}
    />
  )
}

PageLogo.css = `
.title-logo {
  width: 1em;
}
`

export default (() => PageLogo) satisfies QuartzComponentConstructor
