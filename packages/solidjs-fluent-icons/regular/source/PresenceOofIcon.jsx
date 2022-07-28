import { splitProps } from "solid-js";
function PresenceOofIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.7 7.7A1 1 0 109.28 6.3l-3 3a1 1 0 000 1.41l3 3a1 1 0 101.42-1.41l-1.3-1.3H13a1 1 0 100-2H9.4l1.3-1.29zM10 0a10 10 0 100 20 10 10 0 000-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
    </svg>);
}
export default PresenceOofIcon;
