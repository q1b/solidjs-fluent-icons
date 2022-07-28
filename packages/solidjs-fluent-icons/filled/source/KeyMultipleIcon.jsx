import { splitProps } from "solid-js";
function KeyMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2l.32.01a5.5 5.5 0 00-1.09 7.96l-.73.74v1.69a.6.6 0 01-.6.6H6v1.4a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6v-2.86a.6.6 0 01.18-.42l3.98-3.99A4 4 0 0110 2zM9 6.5a4.5 4.5 0 117 3.74v2.05l.78.79a.6.6 0 010 .84L15.71 15l1.06 1.07a.6.6 0 01-.04.89l-2.36 1.88a.6.6 0 01-.74 0l-2.4-1.92a.6.6 0 01-.23-.47v-6.2A4.5 4.5 0 019 6.5zm5.25-1a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"/>
    </svg>);
}
export default KeyMultipleIcon;
