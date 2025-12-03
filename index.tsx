
import React from "react";
import { createRoot } from "react-dom/client";

// This file is deprecated in favor of the Next.js 'app/' directory structure.
// In a real Next.js environment, the entry point is handled by the framework.
// For the purpose of this demo environment, we will render a placeholder message
// if this file is somehow still executed.

const App = () => {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Migration to Next.js Complete</h1>
      <p>The application code has been migrated to the <code>app/</code> directory.</p>
      <ul>
        <li>Home: <code>app/page.tsx</code></li>
        <li>Explore: <code>app/explore/page.tsx</code></li>
        <li>Lab: <code>app/lab/page.tsx</code></li>
      </ul>
      <p>Please refer to the new file structure.</p>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
