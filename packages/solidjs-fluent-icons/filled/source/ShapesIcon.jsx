import { splitProps } from "solid-js";
function ShapesIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 7.5A5.5 5.5 0 0112.98 7H10.5A3.5 3.5 0 007 10.5v2.48A5.5 5.5 0 012 7.5zm8.5.5A2.5 2.5 0 008 10.5v5a2.5 2.5 0 002.5 2.5h5a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0015.5 8h-5z"/>
    </svg>);
}
export default ShapesIcon;
