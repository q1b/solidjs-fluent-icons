import { splitProps } from "solid-js";
function KeyboardLayoutFloatIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 4.5C2 3.67 2.67 3 3.5 3h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H11a1 1 0 11-2 0H3.5A1.5 1.5 0 012 12.5v-8zM5.5 7a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5zm-6 4a.5.5 0 000 1h9a.5.5 0 000-1h-9zm8.25-4.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm-7.5 2.5a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM10 9.5A.75.75 0 1010 8a.75.75 0 000 1.5zm2.25-.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM8.5 7a.75.75 0 100-1.5.75.75 0 000 1.5zM2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"/>
    </svg>);
}
export default KeyboardLayoutFloatIcon;
