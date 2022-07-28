import { splitProps } from "solid-js";
function PowerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.75 2.5a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm3 1.5a.75.75 0 10-.76 1.3A6 6 0 117 5.3.75.75 0 106.25 4a7.5 7.5 0 107.5 0z"/>
    </svg>);
}
export default PowerIcon;
