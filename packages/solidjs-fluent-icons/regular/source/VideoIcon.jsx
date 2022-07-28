import { splitProps } from "solid-js";
function VideoIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 4A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h7a2.5 2.5 0 002.5-2.5v-1l2.4 1.8a1 1 0 001.6-.8v-7a1 1 0 00-1.6-.8L14 7.5v-1A2.5 2.5 0 0011.5 4h-7zM14 8.75l3-2.25v7l-3-2.25v-2.5zM13 6.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 13.5v-7C3 5.67 3.67 5 4.5 5h7c.83 0 1.5.67 1.5 1.5z"/>
    </svg>);
}
export default VideoIcon;
