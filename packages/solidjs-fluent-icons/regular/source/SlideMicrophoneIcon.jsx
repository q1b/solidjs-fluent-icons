import { splitProps } from "solid-js";
function SlideMicrophoneIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 7a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 2.5a.5.5 0 000 1h6a.5.5 0 000-1h-6zm-.5 3c0-.28.22-.5.5-.5H10a.5.5 0 010 1H5.5a.5.5 0 01-.5-.5zM4.5 4A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h5.92a4.97 4.97 0 01-.32-1H4.5A1.5 1.5 0 013 13.5v-7C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v3.26a3 3 0 011 2.2V6.5A2.5 2.5 0 0015.5 4h-11zm8.5 8a2 2 0 114 0v2a2 2 0 01-4 0v-2zm-.97 2.43a.5.5 0 10-.99.14 4 4 0 003.46 3.4v.53a.5.5 0 101 0v-.53a4 4 0 003.46-3.4.5.5 0 10-1-.14 3 3 0 01-5.93 0z"/>
    </svg>);
}
export default SlideMicrophoneIcon;
