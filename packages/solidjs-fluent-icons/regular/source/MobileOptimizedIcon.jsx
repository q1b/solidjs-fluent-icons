import { splitProps } from "solid-js";
function MobileOptimizedIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2.5a.5.5 0 00-1 0V4H2.5a.5.5 0 000 1h2a.5.5 0 00.5-.5v-2zm11 0a.5.5 0 00-1 0v2c0 .28.22.5.5.5h2a.5.5 0 000-1H16V2.5zM7 5a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1V6a1 1 0 00-1-1H7zm0 1h6v8H7V6zM4.5 18a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2a.5.5 0 000 1H4v1.5c0 .28.22.5.5.5zm11 0a.5.5 0 00.5-.5V16h1.5a.5.5 0 000-1h-2a.5.5 0 00-.5.5v2c0 .28.22.5.5.5zm-7-10a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 2a.5.5 0 000 1h2a.5.5 0 000-1h-2z"/>
    </svg>);
}
export default MobileOptimizedIcon;
