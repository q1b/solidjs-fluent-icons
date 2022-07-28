import { splitProps } from "solid-js";
function RenameIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 2a.5.5 0 000 1h1v14h-1a.5.5 0 000 1h3a.5.5 0 000-1h-1V3h1a.5.5 0 000-1h-3zm-4 2h4v12h-4A2.5 2.5 0 012 13.5v-7A2.5 2.5 0 014.5 4zm11 12h-4V4h4A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5z"/>
    </svg>);
}
export default RenameIcon;
