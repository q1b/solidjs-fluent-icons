import { splitProps } from "solid-js";
function VideoAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14 5.5A2.5 2.5 0 0011.5 3h-6A2.5 2.5 0 003 5.5v3.1a5.5 5.5 0 017.8 6.4h.7a2.5 2.5 0 002.5-2.5v-7zm1 1.43v4.15l2.76 2.35a.75.75 0 001.24-.57V5.2a.75.75 0 00-1.23-.57L15 6.93zm-5 6.57a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V13H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V14h1.5a.5.5 0 000-1H6v-1.5z"/>
    </svg>);
}
export default VideoAddIcon;
