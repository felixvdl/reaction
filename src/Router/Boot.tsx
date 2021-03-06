import { Theme, themeProps } from "@artsy/palette"
import { track } from "Analytics"
import React from "react"
import { GridThemeProvider } from "styled-bootstrap-grid"
import { GlobalStyles } from "Styleguide/Elements/GlobalStyles"
import { Grid } from "Styleguide/Elements/Grid"
import { BreakpointVisualizer } from "Styleguide/Utils/BreakpointVisualizer"
import { Provider as StateProvider } from "unstated"
import Events from "Utils/Events"
import { ResponsiveProvider } from "Utils/Responsive"
import { ContextProvider } from "../Components/Artsy"
import { AppState } from "./state"
import { BootProps } from "./types"

// TODO: Do we want to let Force explicitly inject the analytics code?
@track(null, { dispatch: data => Events.postEvent(data) })
export class Boot extends React.Component<BootProps> {
  static defaultProps = {
    initialBreakpoint: null,
    relayEnvironment: null,
    currentUser: null,
  }

  render() {
    const { children, ...props } = this.props
    const appState = new AppState(props)

    return (
      <StateProvider inject={[appState]}>
        <ContextProvider
          relayEnvironment={props.relayEnvironment}
          currentUser={props.currentUser}
        >
          <ResponsiveProvider
            initialBreakpoint={props.initialBreakpoint}
            breakpoints={themeProps.mediaQueries}
          >
            <GlobalStyles>
              <Theme>
                <GridThemeProvider gridTheme={themeProps.grid}>
                  <Grid fluid>
                    {children}
                    {process.env.NODE_ENV === "development" && (
                      <BreakpointVisualizer />
                    )}
                  </Grid>
                </GridThemeProvider>
              </Theme>
            </GlobalStyles>
          </ResponsiveProvider>
        </ContextProvider>
      </StateProvider>
    )
  }
}
