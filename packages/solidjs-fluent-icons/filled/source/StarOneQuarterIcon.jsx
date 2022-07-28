import { splitProps } from "solid-js";
function StarOneQuarterIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 5.14L7.17 6.8l-4.31.63a1 1 0 00-.56 1.7l3.13 3.05-.74 4.3a1 1 0 001.45 1.05L8 16.56V5.14z"/>
    </svg>);
}
export default StarOneQuarterIcon;
