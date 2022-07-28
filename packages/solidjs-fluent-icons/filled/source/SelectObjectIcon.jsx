import { splitProps } from "solid-js";
function SelectObjectIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm11 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-11 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm11 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 4.75c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 4.75zm0 10.5c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm-3-7.5a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5zm10.5 0a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5z"/>
    </svg>);
}
export default SelectObjectIcon;
