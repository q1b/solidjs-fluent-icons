import { splitProps } from "solid-js";
function ArrowRotateCounterclockwiseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 3.5a6.5 6.5 0 016.5 6.5.75.75 0 001.5 0 8 8 0 10-12.66 6.5H4.25a.75.75 0 000 1.5h3c.41 0 .75-.34.75-.75v-3a.75.75 0 00-1.5 0v1.23A6.5 6.5 0 0110 3.5zM7.5 10a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM9 10a1 1 0 112 0 1 1 0 01-2 0z"/>
    </svg>);
}
export default ArrowRotateCounterclockwiseIcon;
