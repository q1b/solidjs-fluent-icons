import { splitProps } from "solid-js";
function ChevronDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.8 7.73c.28.3.27.78-.03 1.06l-5.25 5a.75.75 0 01-1.04 0l-5.25-5a.75.75 0 011.04-1.08L10 12.2l4.73-4.5a.75.75 0 011.06.02z"/>
    </svg>);
}
export default ChevronDownIcon;
