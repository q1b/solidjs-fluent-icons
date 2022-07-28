import { splitProps } from "solid-js";
function TextMoreIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 2c.2 0 .39.12.46.31l5.1 12.51a2.26 2.26 0 00-1.08 0L11.33 12H4.67l-1.7 4.19a.5.5 0 11-.93-.38l5.5-13.5A.5.5 0 018 2zm5 13.75a1.25 1.25 0 110 2.5 1.25 1.25 0 110-2.5zm0 0zM5.08 11h5.84L8 3.83 5.08 11zm5.17 6a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM17 18.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>
    </svg>);
}
export default TextMoreIcon;
