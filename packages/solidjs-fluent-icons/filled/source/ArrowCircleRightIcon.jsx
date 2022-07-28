import { splitProps } from "solid-js";
function ArrowCircleRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.85-4.65a.5.5 0 01-.7-.7l2.14-2.15H6.5a.5.5 0 010-1h5.8l-2.15-2.15a.5.5 0 01.7-.7l3 3c.2.2.2.5 0 .7l-3 3z"/>
    </svg>);
}
export default ArrowCircleRightIcon;
