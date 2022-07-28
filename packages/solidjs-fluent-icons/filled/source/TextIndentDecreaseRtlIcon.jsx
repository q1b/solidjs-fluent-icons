import { splitProps } from "solid-js";
function TextIndentDecreaseRtlIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.25 4a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h7.5zM14 9.75a.75.75 0 00-.75-.75H2.75a.75.75 0 000 1.5h10.5c.41 0 .75-.34.75-.75zm0 5a.75.75 0 00-.75-.75h-5.5a.75.75 0 000 1.5h5.5c.41 0 .75-.34.75-.75zm1.22-7.03c.3-.3.77-.3 1.06 0l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l.97-.97-.97-.97a.75.75 0 010-1.06z"/>
    </svg>);
}
export default TextIndentDecreaseRtlIcon;
