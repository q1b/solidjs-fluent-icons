import { splitProps } from "solid-js";
function NotebookEyeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a2 2 0 00-2 2v7.57a5.8 5.8 0 016.47 1c.88.82 1.53 1.94 1.53 2.93a3.3 3.3 0 01-.43 1.52c-.18.33-.41.66-.7.98H13a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1zM16 6h.5c.28 0 .5.22.5.5V8a.5.5 0 01-.5.5H16V6zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H16V9.5zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 01-.5.5H16V13zM1 15.5C1 14.32 2.74 12 5.5 12s4.5 2.3 4.5 3.5c0 1.18-1.74 3.5-4.5 3.5S1 16.7 1 15.5zm3.11 2.08a2.5 2.5 0 102.78-4.16 2.5 2.5 0 00-2.78 4.16zm2.64-1.25a1.5 1.5 0 10-2.5-1.66 1.5 1.5 0 002.5 1.66z"/>
    </svg>);
}
export default NotebookEyeIcon;
