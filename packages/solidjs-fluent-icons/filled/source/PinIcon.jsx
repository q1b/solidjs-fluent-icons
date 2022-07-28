import { splitProps } from "solid-js";
function PinIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.33 2.62a2 2 0 00-3.2.52L8.38 6.6a1.5 1.5 0 01-.78.72L4 8.75a1 1 0 00-.33 1.64l2.61 2.6L3 16.3v.7h.7L7 13.72l2.61 2.6a1 1 0 001.64-.33l1.43-3.59c.14-.34.4-.62.72-.78l3.46-1.73a2 2 0 00.52-3.2l-4.05-4.06z"/>
    </svg>);
}
export default PinIcon;
