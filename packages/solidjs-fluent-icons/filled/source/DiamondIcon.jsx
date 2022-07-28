import { splitProps } from "solid-js";
function DiamondIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.59 11.41a2 2 0 010-2.82l6-6a2 2 0 012.83 0l6 6a2 2 0 010 2.82l-6 6a2 2 0 01-2.83 0l-6-6z"/>
    </svg>);
}
export default DiamondIcon;
