/*
Remove all the contents of App.css & index.css
Don't make any changes in the main.jsx
Remove all the imports from the App.jsx
*/
import { MyApp } from "./components/CaseStudy";
function App() {
  return (
    <div>
      <h2 className="alert alert-secondary text-center text-primary">
        React application with Vite!
      </h2>
      <MyApp />
    </div>
  );
}

export default App;
