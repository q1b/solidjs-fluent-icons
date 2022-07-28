import { splitProps } from "solid-js";
function BedIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.5 9a2.5 2.5 0 012.5 2.34v5.16a.5.5 0 01-1 .09V14H3v2.5a.5.5 0 01-1 .09V11.5A2.5 2.5 0 014.34 9H15.5zm-9-6h7A2.5 2.5 0 0116 5.34V8h-2v-.5a.5.5 0 00-.41-.5H11a.5.5 0 00-.5.41V8h-1v-.5a.5.5 0 00-.41-.5H6.5a.5.5 0 00-.5.41V8H4V5.5A2.5 2.5 0 016.34 3h.16z"/>
    </svg>);
}
export default BedIcon;
