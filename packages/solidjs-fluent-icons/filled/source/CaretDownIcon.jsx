import { splitProps } from "solid-js";
function CaretDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.8 7a1 1 0 00-.78 1.63l3.81 4.72c.6.74 1.74.74 2.34 0l3.81-4.72A1 1 0 0014.2 7H5.8z"/>
    </svg>);
}
export default CaretDownIcon;
