import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "quartz/components/types"

export default ((components?: QuartzComponent[]) => {
    const Centered: QuartzComponent = (props: QuartzComponentProps) => {
      return (
        <div 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }} 
        >
          {components && components.map((component, index) => {
            const Component = component
            const CenteredComponent: QuartzComponent = (props: QuartzComponentProps) => {
              return <Component {...props} />
            }

            CenteredComponent.displayName = component.displayName
            CenteredComponent.afterDOMLoaded = component?.afterDOMLoaded
            CenteredComponent.beforeDOMLoaded = component?.beforeDOMLoaded
            CenteredComponent.css = component?.css
            return CenteredComponent(props)
        })}
        </div>
      )
    }
    return Centered;
}) satisfies QuartzComponentConstructor
