import { pathToRoot } from "quartz/util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "quartz/components/types"
import { classNames } from "quartz/util/lang"
import { i18n } from "quartz/i18n"

const TitleCard: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <>
      <image src="static/title_icon.png" alt={i18n(cfg.locale).propertyDefaults.title} />
      <h1 class={classNames(displayClass, "title-card-title")}>
        <a href={baseDir}>{title}</a>
      </h1>
    </>
  )
}

TitleCard.css = `
.title-card-title {
  margin: 0;
}
`

export default (() => TitleCard) satisfies QuartzComponentConstructor
