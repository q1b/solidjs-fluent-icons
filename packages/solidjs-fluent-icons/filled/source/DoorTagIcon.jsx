import { splitProps } from "solid-js";
function DoorTagIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.3 6.3A1 1 0 1110 8H7a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2V7.05a4.98 4.98 0 00-8.54-3.59A2 2 0 109.3 6.3zM8 14h4a.5.5 0 010 1H8a.5.5 0 010-1z"/>
    </svg>);
}
export default DoorTagIcon;
