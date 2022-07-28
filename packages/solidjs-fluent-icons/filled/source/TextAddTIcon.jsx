import { splitProps } from "solid-js";
function TextAddTIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.75 5a1 1 0 011-1h12.5a1 1 0 011 1v2a1 1 0 11-2 0V6H12v8.03a6.47 6.47 0 00-.5 5.97H9a1 1 0 110-2h1V6H5.75v1a1 1 0 01-2 0V5zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z"/>
    </svg>);
}
export default TextAddTIcon;
