import { splitProps } from "solid-js";
function SquaresNestedIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v1.76A2.99 2.99 0 0015 7h-5a3 3 0 00-3 3v5c0 .77.29 1.47.76 2H6a3 3 0 01-3-3V6zm7 11h4a3 3 0 003-3v-4a2 2 0 00-2-2h-5a2 2 0 00-2 2v5c0 1.1.9 2 2 2z"/>
    </svg>);
}
export default SquaresNestedIcon;
