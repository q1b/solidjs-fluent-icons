import { splitProps } from "solid-js";
function RealEstateIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 3a1 1 0 012 0h13a1 1 0 110 2H4v12.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V3zm3 3.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 015 13.5v-7zm3 7c0 .28.22.5.5.5h1a.5.5 0 00.5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1c0 .28.22.5.5.5h1a.5.5 0 00.5-.5v-2.55a1 1 0 00-.34-.75l-2.33-2.07a.5.5 0 00-.66 0L8.34 10.2a1 1 0 00-.34.75v2.55z"/>
    </svg>);
}
export default RealEstateIcon;
