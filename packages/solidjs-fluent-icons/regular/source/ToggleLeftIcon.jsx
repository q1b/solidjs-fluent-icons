import { splitProps } from "solid-js";
function ToggleLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 12a2 2 0 110-4 2 2 0 010 4zm12-2a4 4 0 00-4-4H6a4 4 0 100 8h8a4 4 0 004-4zm-4-3a3 3 0 110 6H6a3 3 0 110-6h8z"/>
    </svg>);
}
export default ToggleLeftIcon;
