import { splitProps } from "solid-js";
function TextColorAccentIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 13.13c0-.35.24-.63.54-.63h11.92c.3 0 .54.28.54.63v3.74c0 .35-.24.63-.54.63H4.04c-.3 0-.54-.28-.54-.63v-3.75z"/>
    </svg>);
}
export default TextColorAccentIcon;
