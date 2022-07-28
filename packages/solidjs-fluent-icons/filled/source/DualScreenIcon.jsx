import { splitProps } from "solid-js";
function DualScreenIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5.5V4H4zm2 9.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM10.5 4v12H16a2 2 0 002-2V6a2 2 0 00-2-2h-5.5zm2 9h1a.5.5 0 010 1h-1a.5.5 0 010-1z"/>
    </svg>);
}
export default DualScreenIcon;
