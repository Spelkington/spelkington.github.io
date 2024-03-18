import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      BlueSky: "https://bsky.app/profile/spencer.chaoticgood.computer",
      LinkedIn: "https://linkedin.com/in/spelkington",
      GitHub: "https://github.com/chaoticgoodcomputing",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    // Component.DesktopOnly(Component.Logo()),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.TagExplorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    // Component.DesktopOnly(Component.Logo()),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TagExplorer()),
  ],
  right: [],
}

// Used for the root-level index
export const landingPageLayout: PageLayout = {
  beforeBody: [
    Component.Utilities.Centered([
      Component.LandingPage.TitleLogo(),
      Component.PageTitle(),
      Component.Spacer(),
      Component.Search(),
    ]),
    Component.Graph(),
    Component.Utilities.Centered([Component.ArticleTitle()]),
  ],
  left: [],
  right: [],
}
