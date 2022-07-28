import { splitProps } from "solid-js";
function AlignSpaceEvenlyVerticalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 1a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2V3a2 2 0 00-2-2H6z"/>
  <path d="M6 13a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2v-1a2 2 0 00-2-2H6z"/>
  <path d="M6 7a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2V9a2 2 0 00-2-2H6z"/>
    </svg>);
}
export default AlignSpaceEvenlyVerticalIcon;
