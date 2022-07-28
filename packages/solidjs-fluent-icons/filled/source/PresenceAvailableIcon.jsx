import { splitProps } from "solid-js";
function PresenceAvailableIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 20a10 10 0 100-20 10 10 0 000 20zm4.2-11.8l-4.5 4.5a1 1 0 01-1.4 0l-2-2a1 1 0 111.4-1.4L9 10.58l3.8-3.8a1 1 0 111.4 1.42z"/>
    </svg>);
}
export default PresenceAvailableIcon;
