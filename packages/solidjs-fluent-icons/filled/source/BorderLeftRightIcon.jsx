import { splitProps } from "solid-js";
function BorderLeftRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.5 6a1.5 1.5 0 00-1.04-1.43.75.75 0 01.58-1.38A3 3 0 0117 6v8a3 3 0 01-1.96 2.81.75.75 0 11-.58-1.38l.07-.03c.57-.21.97-.76.97-1.4V6zM8.75 3a.75.75 0 100 1.5h2.5a.75.75 0 000-1.5h-2.5zm0 12.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zM5.45 4.6A1.5 1.5 0 004.5 6v8a1.5 1.5 0 001.03 1.43h.01a.75.75 0 01-.58 1.38A3 3 0 013 14.01V6a3 3 0 011.96-2.82.75.75 0 11.49 1.42z"/>
    </svg>);
}
export default BorderLeftRightIcon;
