import { splitProps } from "solid-js";
function DatabaseArrowDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3zm4.69.02c.47-.24.93-.54 1.31-.9v2.09A5.5 5.5 0 0010.26 18H10c-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.85 2.35a.5.5 0 00.35.15.5.5 0 00.35-.15l2-2a.5.5 0 00-.7-.7L15 15.29V12.5a.5.5 0 00-1 0v2.8l-1.15-1.15a.5.5 0 00-.7.7l2 2z"/>
    </svg>);
}
export default DatabaseArrowDownIcon;
