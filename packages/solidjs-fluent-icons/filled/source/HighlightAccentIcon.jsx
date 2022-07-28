import { splitProps } from "solid-js";
function HighlightAccentIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.5 3v4a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V3h13zm-10 7.5v7l6.45-3.1a1 1 0 00.55-.9v-3h-7z"/>
    </svg>);
}
export default HighlightAccentIcon;
