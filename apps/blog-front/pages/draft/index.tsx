import React, { useEffect, useRef, useState } from 'react';
import {Editor, EditorState, ContentState, convertFromRaw,convertToRaw,RichUtils,Modifier,DraftInlineStyle} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Box, Typography } from '@mui/material';
import {Options, stateToHTML} from 'draft-js-export-html';
import { blue } from '@mui/material/colors';


/* eslint-disable-next-line */
export interface DraftProps {}

export function Draft(props: DraftProps) {

  const [html,setHtml] = useState("")
  return (
    <div>
      <h1>Welcome to Draft!</h1>
      <Box
        sx={{
          // color: 'red',
          border: 1,
          fontSize:64,
          borderColor:blue[500]
        }}
      >
        <MyEditor onChange={setHtml}/>
      </Box>
      <h2>
        Converted HTML
      </h2>
      <Box
        sx={{
          color: 'red',
          border: 1,
          borderColor:blue[500]
        }}
      >
        {html}
      </Box>

      <h2>dangerously set innerHTML</h2>
      <Typography
      >
        {/* <MyEditor onChange={setHtml}/> */}
        <span dangerouslySetInnerHTML={{
          __html:html
        }} />
      </Typography>
    </div>
  );
}

export default Draft;

const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: "",
      key: "foo",
      type: "unstyled",
      entityRanges: [],
    } as any,
  ],
});

export interface MyEditorProps{
  onChange:(value:string)=>void,
}



function MyEditor({
  onChange,
}:MyEditorProps) {
  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(emptyContentState)
  );

  useEffect(() => {
    setEditorState(
      EditorState.createWithContent(ContentState.createFromText(""))
    );
  }, []);
  useEffect(() => {
    onChange(stateToHTML(editorState.getCurrentContent(),options));
  },[editorState])

  // const picker = useRef(colorPickerPlugin(setEditorState, editorState))
  const toggledColor = 'red';
  return (
    <Box>
      <button
        onClick={(e) => {
          // e.preventDefault()
          const selection = editorState.getSelection();

          // Let's just allow one color at a time. Turn off all active colors.
          const nextContentState = Object.keys(colorStyleMap)
            .reduce((contentState, color) => {
              return Modifier.removeInlineStyle(contentState, selection, color)
            }, editorState.getCurrentContent());

          let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
          );

          const currentStyle = editorState.getCurrentInlineStyle();

          // Unset style override for current color.
          if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, color) => {
              return RichUtils.toggleInlineStyle(state, color);
            }, nextEditorState);
          }

          // If the color is being toggled on, apply it.
          if (!currentStyle.has(toggledColor)) {
            nextEditorState = RichUtils.toggleInlineStyle(
              nextEditorState,
              toggledColor
            );
          }
          setEditorState(nextEditorState)
        }}
      >Red</button>
      <Editor
        editorKey="hugahuga"
        editorState={editorState}
        customStyleMap={colorStyleMap}
        onChange={(editorState) => {
          setEditorState(editorState);
        }}
        // userSelect="none"
        // contentEditable={false}
      />
    </Box>
  );
}

const colorStyleMap = {
  red: {
    color: 'rgba(255, 0, 0, 1.0)',
  },
  orange: {
    color: 'rgba(255, 127, 0, 1.0)',
  },
  yellow: {
    color: 'rgba(180, 180, 0, 1.0)',
  },
  green: {
    color: 'rgba(0, 180, 0, 1.0)',
  },
  blue: {
    color: 'rgba(0, 0, 255, 1.0)',
  },
  indigo: {
    color: 'rgba(75, 0, 130, 1.0)',
  },
  violet: {
    color: 'rgba(127, 0, 255, 1.0)',
  },
};

const options:Options = {
  // defaultBlockTag: 'p',
  inlineStyles: {
    red: {
      style: { color: 'red' },
      element:'span'
    }
  }
}


// class StyleButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onToggle = (e) => {
//       e.preventDefault();
//       this.props.onToggle(this.props.style);
//     };
//   }

//   render() {
//     let style;
//     if (this.props.active) {
//       style = {...styles.styleButton, ...colorStyleMap[this.props.style]};
//     } else {
//       style = styles.styleButton;
//     }

//     return (
//       <span style={style} onMouseDown={this.onToggle}>
//         {this.props.label}
//       </span>
//     );
//   }
// }

// const COLORS = [
//   {label: 'Red', style: 'red'},
//   {label: 'Orange', style: 'orange'},
//   {label: 'Yellow', style: 'yellow'},
//   {label: 'Green', style: 'green'},
//   {label: 'Blue', style: 'blue'},
//   {label: 'Indigo', style: 'indigo'},
//   {label: 'Violet', style: 'violet'},
// ];

// const ColorControls = (props) => {
//   var currentStyle = props.editorState.getCurrentInlineStyle();
//   return (
//     <div style={styles.controls}>
//       {COLORS.map(type =>
//         <StyleButton
//           key={type.label}
//           active={currentStyle.has(type.style)}
//           label={type.label}
//           onToggle={props.onToggle}
//           style={type.style}
//         />
//       )}
//     </div>
//   );
// };

// // This object provides the styling information for our custom color
// // styles.
// const colorStyleMap = {
//   red: {
//     color: 'rgba(255, 0, 0, 1.0)',
//   },
//   orange: {
//     color: 'rgba(255, 127, 0, 1.0)',
//   },
//   yellow: {
//     color: 'rgba(180, 180, 0, 1.0)',
//   },
//   green: {
//     color: 'rgba(0, 180, 0, 1.0)',
//   },
//   blue: {
//     color: 'rgba(0, 0, 255, 1.0)',
//   },
//   indigo: {
//     color: 'rgba(75, 0, 130, 1.0)',
//   },
//   violet: {
//     color: 'rgba(127, 0, 255, 1.0)',
//   },
// };

// const styles = {
//   root: {
//     fontFamily: '\'Georgia\', serif',
//     fontSize: 14,
//     padding: 20,
//     width: 600,
//   },
//   editor: {
//     borderTop: '1px solid #ddd',
//     cursor: 'text',
//     fontSize: 16,
//     marginTop: 20,
//     minHeight: 400,
//     paddingTop: 20,
//   },
//   controls: {
//     fontFamily: '\'Helvetica\', sans-serif',
//     fontSize: 14,
//     marginBottom: 10,
//     userSelect: 'none',
//   },
//   styleButton: {
//     color: '#999',
//     cursor: 'pointer',
//     marginRight: 16,
//     padding: '2px 0',
//   },
// };
