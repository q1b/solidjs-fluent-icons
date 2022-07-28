import { splitProps } from "solid-js";
function VideoClipOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l.73.74A2.5 2.5 0 002 5.5v9A2.5 2.5 0 004.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 00.7-.7l-15-15zM15.3 16H4.5A1.5 1.5 0 013 14.5v-9c0-.49.23-.92.6-1.2L8 8.7v3.95a.5.5 0 00.78.42l2.15-1.43L15.3 16zM9.92 7.8l2.71 2.71.15-.1a.5.5 0 00-.01-.83L9.92 7.8zM17 14.5c0 .12-.01.23-.04.34l.78.78c.17-.34.26-.72.26-1.12v-9A2.5 2.5 0 0015.5 3H5.12l1 1h9.38c.83 0 1.5.67 1.5 1.5v9z"/>
    </svg>);
}
export default VideoClipOffIcon;
