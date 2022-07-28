import { splitProps } from "solid-js";
function HistoryIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.37 2.02A8 8 0 112 9.74a.75.75 0 011.5.04 6.5 6.5 0 101.57-4.03l-.2.25h1.88l.1.01a.75.75 0 010 1.49h-3.7a.75.75 0 01-.64-.64V2.66c.04-.34.3-.6.64-.65h.2c.34.05.6.3.65.64v2.06a7.98 7.98 0 015.37-2.69zM9.75 6l.1.01c.33.05.6.3.64.64l.01.1V10h1.85a.75.75 0 010 1.5h-2.7a.75.75 0 01-.64-.65l-.01-.1v-4.1c.05-.33.32-.6.65-.64h.1z"/>
    </svg>);
}
export default HistoryIcon;
