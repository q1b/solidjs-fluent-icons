import { splitProps } from "solid-js";
function PersonRunningIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.5 4.5a2 2 0 112.61 1.9l1.6 1.6h1.79a1.5 1.5 0 010 3h-3.22c-.63 0-1.24-.25-1.68-.7l-.1-.1-1.04 1.05 1.4 1.4c.09.09.14.22.14.35v3.5a1.5 1.5 0 01-3 0v-1.8l-1.55-1.54-1 .75c-.5.38-1.13.59-1.76.59H2.5a1.5 1.5 0 010-3h4.25c1.24 0 2.25-1 2.25-2.25V8h1a.5.5 0 000-1H8.5a.5.5 0 00-.5.5v1.75a1.25 1.25 0 11-2.5 0V7A2.5 2.5 0 018 4.5h3.5z"/>
    </svg>);
}
export default PersonRunningIcon;
