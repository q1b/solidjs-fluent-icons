import { splitProps } from "solid-js";
function AlignLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 2a.5.5 0 00-.5.5v15a.5.5 0 001 0v-15a.5.5 0 00-.5-.5zM7 11a2 2 0 00-2 2v1c0 1.1.9 2 2 2h5a2 2 0 002-2v-1a2 2 0 00-2-2H7zM5 6c0-1.1.9-2 2-2h8a2 2 0 012 2v1a2 2 0 01-2 2H7a2 2 0 01-2-2V6z"/>
    </svg>);
}
export default AlignLeftIcon;