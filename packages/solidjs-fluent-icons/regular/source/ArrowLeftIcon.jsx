import { splitProps } from "solid-js";
function ArrowLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.16 16.37a.5.5 0 10.67-.74L3.67 10H17.5a.5.5 0 000-1H3.67l6.16-5.63a.5.5 0 00-.67-.74L2.24 8.94a.75.75 0 000 1.11l6.92 6.32z"/>
    </svg>);
}
export default ArrowLeftIcon;
