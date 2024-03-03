import { i18n } from "../i18n"
import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const GoogleAnalytics: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    // TODO: Move analytics token up to config & publish as extension
    return (
      <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5BTXRRC6VG"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5BTXRRC6VG');
        </script>
      </>
    )
  }

  return GoogleAnalytics
}) satisfies QuartzComponentConstructor
