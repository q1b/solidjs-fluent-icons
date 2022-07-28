import { splitProps } from "solid-js";
function NotebookQuestionMarkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a2 2 0 00-2 2v5.6A5.5 5.5 0 019.74 18H13a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1zM16 6h.5c.28 0 .5.22.5.5V8a.5.5 0 01-.5.5H16V6zm.5 3.5H16V12h.5a.5.5 0 00.5-.5V10a.5.5 0 00-.5-.5zM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 01-.5.5H16V13zm-6 1.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.5 1.88a.62.62 0 100 1.25.62.62 0 000-1.25zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 101-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 001 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95z"/>
    </svg>);
}
export default NotebookQuestionMarkIcon;
