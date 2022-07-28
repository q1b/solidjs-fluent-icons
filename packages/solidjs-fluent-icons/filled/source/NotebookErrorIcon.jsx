import { splitProps } from "solid-js";
function NotebookErrorIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H9.74A5.5 5.5 0 003 9.6V4zm2.5 1a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-7zm11 1H16v2.5h.5A.5.5 0 0017 8V6.5a.5.5 0 00-.5-.5zM16 9.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H16V9.5zm.5 3.5H16v2.5h.5a.5.5 0 00.5-.5v-1.5a.5.5 0 00-.5-.5zm-11 6a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM5 12.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-2zm1.13 4a.62.62 0 11-1.25 0 .62.62 0 011.25 0z"/>
    </svg>);
}
export default NotebookErrorIcon;
