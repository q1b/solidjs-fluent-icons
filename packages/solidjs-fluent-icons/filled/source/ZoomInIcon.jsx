import { splitProps } from "solid-js";
function ZoomInIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14 8.5c0 1.25-.42 2.4-1.12 3.32l4.15 4.15a.75.75 0 01-.98 1.13l-.08-.07-4.15-4.15A5.5 5.5 0 1114 8.5zM8.5 5.25a.75.75 0 00-.75.75v1.75H6a.75.75 0 000 1.5h1.75V11a.75.75 0 001.5 0V9.25H11a.75.75 0 000-1.5H9.25V6a.75.75 0 00-.75-.75z"/>
    </svg>);
}
export default ZoomInIcon;
