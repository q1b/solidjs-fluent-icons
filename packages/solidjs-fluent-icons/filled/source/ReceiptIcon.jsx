import { splitProps } from "solid-js";
function ReceiptIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3H6a3 3 0 01-3-3V5zm11 11a2 2 0 002-2v-1h-2v3zM6.5 6a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 3a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 3a.5.5 0 000 1h2a.5.5 0 000-1h-2z"/>
    </svg>);
}
export default ReceiptIcon;
