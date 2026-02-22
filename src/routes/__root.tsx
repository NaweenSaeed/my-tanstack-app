import { Outlet, createRootRoute } from "@tanstack/react-router"
import "../styles.css"

function RootComponent() {
  return <Outlet />
}

export const rootRoute = createRootRoute({
  component: RootComponent,
})

export const Route = rootRoute
