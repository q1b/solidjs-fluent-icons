import { splitProps } from "solid-js";
function SplitHorizontalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.5 10a.5.5 0 000-1h-15a.5.5 0 000 1h15zM14 2a2 2 0 012 2v4H4V4c0-1.1.9-2 2-2h8zM4 11v4c0 1.1.9 2 2 2h8a2 2 0 002-2v-4H4z"/>
    </svg>);
}
export default SplitHorizontalIcon;
