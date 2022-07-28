import { splitProps } from "solid-js";
function TableMoveBelowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.5 17a.5.5 0 000-1h-13a.5.5 0 000 1h13zM12 8v3.59a1.5 1.5 0 00-.5-.09v-1a1.5 1.5 0 00-3 0v1c-.17 0-.34.03-.5.09V8h4zM5 3h2v4H3V5c0-1.1.9-2 2-2zM3 8h4v4H3.5a.5.5 0 01-.5-.5V8zm9-5H8v4h4V3zm1 9V8h4v3.5a.5.5 0 01-.5.5H13zm0-9h2a2 2 0 012 2v2h-4V3zm-4.15 9.65a.5.5 0 00-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 00-.7-.7l-.65.64V10.5a.5.5 0 00-1 0v2.8l-.65-.65z"/>
    </svg>);
}
export default TableMoveBelowIcon;
