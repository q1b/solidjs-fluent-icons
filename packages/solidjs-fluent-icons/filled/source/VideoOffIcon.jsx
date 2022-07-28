import { splitProps } from "solid-js";
function VideoOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7L3.5 4.21A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h6a2.5 2.5 0 002.5-2.3l4.15 4.15a.5.5 0 00.7-.7l-15-15zm13.91 12.28l-1.4-1.2L14 11.88V7.93l2.77-2.31a.75.75 0 011.23.57v7.67c0 .64-.75.99-1.24.57zM13 10.88L6.12 4h4.38A2.5 2.5 0 0113 6.5v4.38z"/>
    </svg>);
}
export default VideoOffIcon;
