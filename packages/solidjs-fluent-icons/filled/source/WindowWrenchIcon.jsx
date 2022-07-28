import { splitProps } from "solid-js";
function WindowWrenchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h2.05c.07-.35.22-.7.44-1H6a2 2 0 01-2-2V7h12v1.03c.44.05.79.28 1 .6V6a3 3 0 00-3-3H6zm6.17 10.7A3.52 3.52 0 0116 9.05c.14.05.22.17.24.31v.15a.49.49 0 01-.14.26l-.97.97a1.5 1.5 0 102.13 2.13l.97-.97c.27-.26.7-.16.75.2a3.51 3.51 0 01-4.68 3.73l-2.73 2.73a1.5 1.5 0 11-2.13-2.13l2.73-2.73z"/>
    </svg>);
}
export default WindowWrenchIcon;
