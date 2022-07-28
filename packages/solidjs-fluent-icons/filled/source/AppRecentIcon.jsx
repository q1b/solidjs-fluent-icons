import { splitProps } from "solid-js";
function AppRecentIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM2 6c0-1.1.9-2 2-2v12a2 2 0 01-2-2V6zm14 10V4a2 2 0 012 2v8a2 2 0 01-2 2z"/>
    </svg>);
}
export default AppRecentIcon;
