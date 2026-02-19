import { Outlet, createRootRoute } from "@tanstack/react-router"
import "../styles.css"

function RootComponent() {
  return <Outlet />
}

export const Route = createRootRoute({
  component: RootComponent,
})
