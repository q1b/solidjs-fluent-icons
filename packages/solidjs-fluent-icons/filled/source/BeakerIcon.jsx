import { splitProps } from "solid-js";
function BeakerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.25 4v4.75c0 .4-.1.81-.3 1.18l-.84 1.57h7.78l-.84-1.57a2.5 2.5 0 01-.3-1.18V4h.75a.5.5 0 000-1h-7a.5.5 0 000 1h.75zm7.17 8.5H5.58l-1.23 2.3A1.5 1.5 0 005.67 17h8.66a1.5 1.5 0 001.32-2.2l-1.23-2.3z"/>
    </svg>);
}
export default BeakerIcon;
