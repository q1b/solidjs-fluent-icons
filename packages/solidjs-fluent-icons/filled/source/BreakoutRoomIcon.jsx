import { splitProps } from "solid-js";
function BreakoutRoomIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3h-3.35A3.99 3.99 0 0012 14v-2a4 4 0 00-4-4H6c-1.2 0-2.27.52-3 1.35V6zm3 3a3 3 0 00-3 3v2a3 3 0 003 3h2a3 3 0 003-3v-2a3 3 0 00-3-3H6z"/>
    </svg>);
}
export default BreakoutRoomIcon;
