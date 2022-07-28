import { splitProps } from "solid-js";
function HeadsetIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a6 6 0 00-6 6v6a3 3 0 003 3h1.27A2 2 0 108 16H7a2 2 0 01-2-2v-1h2a1 1 0 001-1V9a1 1 0 00-1-1H5a5 5 0 0110 0h-2a1 1 0 00-1 1v3a1 1 0 001 1h1a2 2 0 002-2V8a6 6 0 00-6-6z"/>
    </svg>);
}
export default HeadsetIcon;
