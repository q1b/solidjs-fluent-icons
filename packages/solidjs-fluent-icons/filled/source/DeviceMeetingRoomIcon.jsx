import { splitProps } from "solid-js";
function DeviceMeetingRoomIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.66 4.95A2.5 2.5 0 016.1 3h7.8c1.17 0 2.18.8 2.44 1.95l1.6 7A2.5 2.5 0 0115.48 15H4.51a2.5 2.5 0 01-2.44-3.05l1.59-7zM5.5 16a.5.5 0 000 1h9a.5.5 0 000-1h-9z"/>
    </svg>);
}
export default DeviceMeetingRoomIcon;
