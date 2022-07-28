import { splitProps } from "solid-js";
function ArrowBetweenUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 18a.5.5 0 01-1 0v-.5c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v.5a.5.5 0 01-1 0v-.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v.5zm5.5-3a.5.5 0 00.5-.5V6.7l3.65 3.65a.5.5 0 00.7-.7l-4.5-4.5a.5.5 0 00-.7 0l-4.5 4.5a.5.5 0 00.7.7L9 6.71v7.79c0 .28.22.5.5.5zM3 2.5C3 3.33 3.67 4 4.5 4h10c.83 0 1.5-.67 1.5-1.5V2a.5.5 0 00-1 0v.5a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5V2a.5.5 0 00-1 0v.5z"/>
    </svg>);
}
export default ArrowBetweenUpIcon;
