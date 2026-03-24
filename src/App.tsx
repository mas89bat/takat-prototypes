import { Toaster } from "sonner";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl">Page not found</h1>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
