import { splitProps } from "solid-js";
function TextParagraphIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.15 10.85a.5.5 0 00.7-.7L10.71 8h4.79A2.5 2.5 0 0018 5.5v-3s0-.5-.5-.5-.5.5-.5.5v3c0 .83-.67 1.5-1.5 1.5h-4.8l2.15-2.15a.5.5 0 00-.7-.7l-3 3a.5.5 0 000 .7l3 3zm-4.3-1.7a.5.5 0 10-.7.7L9.29 12H2.5s-.5 0-.5.5.5.5.5.5h6.8l-2.15 2.15a.5.5 0 00.7.7l3-3a.5.5 0 000-.7l-3-3z"/>
    </svg>);
}
export default TextParagraphIcon;
