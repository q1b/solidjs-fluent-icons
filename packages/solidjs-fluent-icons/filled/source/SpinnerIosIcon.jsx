import { splitProps } from "solid-js";
function SpinnerIosIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 3.5A6.5 6.5 0 003.5 10 .75.75 0 012 10a8 8 0 118 8 .75.75 0 010-1.5 6.5 6.5 0 100-13z"/>
    </svg>);
}
export default SpinnerIosIcon;
