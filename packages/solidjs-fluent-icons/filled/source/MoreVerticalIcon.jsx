import { splitProps } from "solid-js";
function MoreVerticalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 6.5A1.75 1.75 0 1110 3a1.75 1.75 0 010 3.5zM10 17a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-1.75-7a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0z"/>
    </svg>);
}
export default MoreVerticalIcon;
