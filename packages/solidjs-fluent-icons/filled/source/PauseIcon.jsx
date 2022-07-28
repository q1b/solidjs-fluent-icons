import { splitProps } from "solid-js";
function PauseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h2a2 2 0 002-2V4a2 2 0 00-2-2H5zm8 0a2 2 0 00-2 2v12c0 1.1.9 2 2 2h2a2 2 0 002-2V4a2 2 0 00-2-2h-2z"/>
    </svg>);
}
export default PauseIcon;
