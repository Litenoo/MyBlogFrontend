import React from "react";
import Article from "./Article";

const markdown = `Here is some JavaScript code:

[Jump to Text](#text)

<div id="text"></div>

This is the text section.

~~~js
function greet(name) {
  console.log("Hello, " + name + "!");
  return "Greeting sent.";
}
greet("World");
~~~

<hr />

<!-- HTML example -->
<div class="custom-box">
  <strong>This is a custom HTML box!</strong>
  <p>It should be styled by the CSS below.</p>
</div>

<!-- CSS example -->
<style>
.custom-box {
  background: #e0f7fa;
  border: 2px solid #00838f;
  border-radius: 8px;
  padding: 1em;
  margin: 1em 0;
  color: #006064;
}
</style>
`

const App: React.FC = () => (
  <Article title="Some extremly long title and why is copilot not generating title for me" date="28.05.2025" content={markdown} />
);

export default App;