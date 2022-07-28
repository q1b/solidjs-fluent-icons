import { splitProps } from "solid-js";
function BoardGamesIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.95 5.5a2.6 2.6 0 01.98.18 2.5 2.5 0 11-2.29 4.42l.45 1.86c.2.78-.4 1.54-1.21 1.54h-.76c-.81 0-1.41-.76-1.22-1.55l.45-1.85a2.48 2.48 0 01-1.41.4 2 2 0 00-.7-1.07 3.99 3.99 0 00-.4-3.64 2.5 2.5 0 011.2-.29 2.5 2.5 0 012.46-3 2.5 2.5 0 012.45 3zM6.5 5a3 3 0 00-2.24 5H4a1 1 0 100 2h.52a5.76 5.76 0 01-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 018.48 12H9a1 1 0 100-2h-.26A3 3 0 006.5 5z"/>
    </svg>);
}
export default BoardGamesIcon;
