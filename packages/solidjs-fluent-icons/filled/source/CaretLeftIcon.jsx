import { splitProps } from "solid-js";
function CaretLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13 14.2a1 1 0 01-1.63.78l-4.72-3.81a1.5 1.5 0 010-2.34l4.72-3.81A1 1 0 0113 5.8v8.4z"/>
    </svg>);
}
export default CaretLeftIcon;
