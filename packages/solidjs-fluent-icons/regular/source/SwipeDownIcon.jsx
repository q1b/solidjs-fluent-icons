import { splitProps } from "solid-js";
function SwipeDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14 6a4 4 0 01-2.5 3.7V8.6a3 3 0 10-3 0v1.1A4 4 0 1114 6zM9.65 17.85c.2.2.5.2.7 0l3-3a.5.5 0 00-.7-.7l-2.15 2.14V5.5a.5.5 0 00-1 0v10.8l-2.15-2.15a.5.5 0 10-.7.7l3 3z"/>
    </svg>);
}
export default SwipeDownIcon;
