import { splitProps } from "solid-js";
function AddCircleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM6 10c0 .28.22.5.5.5h3v3a.5.5 0 001 0v-3h3a.5.5 0 000-1h-3v-3a.5.5 0 00-1 0v3h-3a.5.5 0 00-.5.5z"/>
    </svg>);
}
export default AddCircleIcon;
