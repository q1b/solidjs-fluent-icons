import { splitProps } from "solid-js";
function SkipForwardTabIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.9 7.81C4.01 6.4 5.92 4.66 8.3 4.15c2.1-.46 4.7.03 7.54 2.85H12.5a.5.5 0 000 1H17a.5.5 0 00.5-.5v-4a.5.5 0 10-1 0v2.75c-3.03-2.97-5.92-3.62-8.42-3.08C5.4 3.76 3.31 5.7 2.11 7.2a.5.5 0 00.78.62zM6.5 11c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-7zM6 12.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-3z"/>
    </svg>);
}
export default SkipForwardTabIcon;
