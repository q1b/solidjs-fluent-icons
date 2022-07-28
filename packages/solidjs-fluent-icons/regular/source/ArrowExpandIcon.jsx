import { splitProps } from "solid-js";
function ArrowExpandIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 3a.5.5 0 00-.5.5v4a.5.5 0 001 0V4.7l3.15 3.15a.5.5 0 10.7-.7L4.71 4H7.5a.5.5 0 000-1h-4zm0 14a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v2.8l3.15-3.15a.5.5 0 01.7.7L4.71 16H7.5a.5.5 0 010 1h-4zM17 3.5a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h2.8l-3.15 3.15a.5.5 0 00.7.7L16 4.71V7.5a.5.5 0 001 0v-4zM16.5 17a.5.5 0 00.5-.5v-4a.5.5 0 00-1 0v2.8l-3.15-3.15a.5.5 0 00-.7.7L15.29 16H12.5a.5.5 0 000 1h4z"/>
    </svg>);
}
export default ArrowExpandIcon;
