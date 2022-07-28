import { splitProps } from "solid-js";
function ErrorCircleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 9.5a.75.75 0 110 1.5.75.75 0 010-1.5zM10 6a.5.5 0 01.5.41V11a.5.5 0 01-1 .09V6.5c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default ErrorCircleIcon;
