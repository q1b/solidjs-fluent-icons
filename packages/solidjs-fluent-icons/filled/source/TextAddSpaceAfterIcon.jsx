import { splitProps } from "solid-js";
function TextAddSpaceAfterIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.75zm0 4c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm9.03 6.03c.3-.3.3-.77 0-1.06l-1.5-1.5a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 101.06 1.06l.97-.97.97.97c.3.3.77.3 1.06 0z"/>
    </svg>);
}
export default TextAddSpaceAfterIcon;
