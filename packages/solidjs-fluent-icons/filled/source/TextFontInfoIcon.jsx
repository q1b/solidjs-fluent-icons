import { splitProps } from "solid-js";
function TextFontInfoIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.2 3.75a.75.75 0 00-1.42-.02L2.8 14.23a.75.75 0 101.4.54l.86-2.27H8.1c.1-.53.27-1.03.51-1.5H5.63l1.82-4.8 1.48 4.24c.32-.47.7-.9 1.15-1.25L8.2 3.75zm5.3 7.13a.62.62 0 100 1.24.62.62 0 000-1.24zm0 5.12a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v2c0 .28.22.5.5.5zm0-7a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 8a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
    </svg>);
}
export default TextFontInfoIcon;
