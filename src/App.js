import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import NewTask from "./pages/NewTask";
import TaskList from "./pages/TaskList";
import EditTask from "./pages/EditTask";
import TaskDetails from "./pages/TaskDetails";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: ":id", element: <TaskDetails /> },
      { path: ":id/edit", element: <EditTask /> },
      { index: true, element: <TaskList /> },
      { path: "newtask", element: <NewTask /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
