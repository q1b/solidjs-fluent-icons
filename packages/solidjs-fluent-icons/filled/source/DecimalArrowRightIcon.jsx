import { splitProps } from "solid-js";
function DecimalArrowRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 3A2.5 2.5 0 006 5.5v4a2.5 2.5 0 005 0v-4A2.5 2.5 0 008.5 3zm-1 2.5a1 1 0 012 0v4a1 1 0 11-2 0v-4zM3 12a1 1 0 100-2 1 1 0 000 2zm12.5-9A2.5 2.5 0 0013 5.5v3.7c.48-.13.98-.2 1.5-.2V5.5a1 1 0 112 0v3.87c.51.2.98.48 1.4.81.07-.22.1-.44.1-.68v-4A2.5 2.5 0 0015.5 3zm-1 7a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z"/>
    </svg>);
}
export default DecimalArrowRightIcon;