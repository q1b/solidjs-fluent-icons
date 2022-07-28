import { splitProps } from "solid-js";
function ShapeExcludeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 10.5v-6A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5V7H9.5A2.5 2.5 0 007 9.5V13H4.5A2.5 2.5 0 012 10.5zM7 13v2.5A2.5 2.5 0 009.5 18h6a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0015.5 7H13v3.5a2.5 2.5 0 01-2.5 2.5H7z"/>
    </svg>);
}
export default ShapeExcludeIcon;
