import { Route, view } from "app/components/ViewRouter"

Route.path("/", view("home"), ["EXACT_PATH"])
// Route.path("/support/:ticketId", view("support"))