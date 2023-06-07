import { useState } from 'react';
import './App.css';
import {marked} from 'marked'





function App() {

  const[state,setState] = useState(
`# H1
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item
> blockquote
![alt text](image.jpg)
**bold text**
`
)

marked.setOptions({
  breaks:true
})
  return (
    <div className="App" >
      <textarea id="editor" value = {state} onChange={(e)=>setState(e.target.value)} ></textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html:marked(state)}}></div>
      
    </div>
  );
}

export default App;
