import { splitProps } from "solid-js";
function ArrowCircleLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 18a8 8 0 110-16 8 8 0 010 16zm-.85-4.65a.5.5 0 00.7-.7L7.71 10.5h5.79a.5.5 0 000-1H7.7l2.15-2.15a.5.5 0 00-.7-.7l-3 3a.5.5 0 000 .7l3 3z"/>
    </svg>);
}
export default ArrowCircleLeftIcon;
