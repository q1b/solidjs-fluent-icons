import { splitProps } from "solid-js";
function SquareEraserIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.73 13.64l4.9-4.9A2.48 2.48 0 0117 8.59V6a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h2.6a2.5 2.5 0 01.13-3.36zm7.74-4.2l2.1 2.1a1.5 1.5 0 010 2.12l-3.6 3.6-4.22-4.22 3.6-3.6a1.5 1.5 0 012.12 0zm-2.21 8.52l-4.22-4.22-.6.6a1.5 1.5 0 000 2.13l2.1 2.1a1.5 1.5 0 001.12.43h4.09a.5.5 0 000-1h-2.53l.04-.04z"/>
    </svg>);
}
export default SquareEraserIcon;
