import { splitProps } from "solid-js";
function TabInPrivateIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3zm-1 2.5v1.3l2.3-2.3H5.5a1 1 0 00-1 1zm0 2.7v2.6l6.3-6.3H8.2L4.5 8.2zm7.7-3.7l-7.7 7.7v2.3a1 1 0 00.03.26L14.76 4.53a1 1 0 00-.26-.03h-2.3zm3.27.74L5.24 15.47a1 1 0 00.26.03h2.3l7.7-7.7V5.5a1 1 0 00-.03-.26zm.03 3.97L9.2 15.5h2.6l3.7-3.7V9.2zm0 4l-2.3 2.29h1.3a1 1 0 001-1v-1.3z"/>
    </svg>);
}
export default TabInPrivateIcon;
