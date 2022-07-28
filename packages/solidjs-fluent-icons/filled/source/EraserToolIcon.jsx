import { splitProps } from "solid-js";
function EraserToolIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 2.5a.5.5 0 00-1 0v12A3.5 3.5 0 006.5 18h7a3.5 3.5 0 003.5-3.5v-12a.5.5 0 00-1 0V6H4V2.5zM4 10V7h12v3H4z"/>
    </svg>);
}
export default EraserToolIcon;
