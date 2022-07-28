import { splitProps } from "solid-js";
function RoadConeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.42 2.76A1 1 0 019.4 2h1.23a1 1 0 01.96.74L15.38 17h2.12a.5.5 0 010 1h-15a.5.5 0 010-1h2.11l.8-3h6.09a.5.5 0 000-1H5.69l.45-1.63.1-.37h4.26a.5.5 0 000-1H6.52c.68-2.48 1.35-4.96 1.9-7.24z"/>
    </svg>);
}
export default RoadConeIcon;
