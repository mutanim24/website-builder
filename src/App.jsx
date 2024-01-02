import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import gjsPlugin from 'grapesjs-preset-webpage';
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";

function App() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPlugin],
      pluginsOpts: {
        gjsPresetWebpage: {},
      }
    })
  }, [])
  return (
    <div>
      <div id="editor">

      </div>
    </div>
  )
}

export default App
