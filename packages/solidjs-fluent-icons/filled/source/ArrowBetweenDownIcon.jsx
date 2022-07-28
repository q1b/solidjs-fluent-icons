import { splitProps } from "solid-js";
function ArrowBetweenDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 1.75a.75.75 0 00-1.5 0v.5C3.5 3.22 4.28 4 5.25 4h9C15.22 4 16 3.22 16 2.25v-.5a.75.75 0 00-1.5 0v.5c0 .14-.11.25-.25.25h-9A.25.25 0 015 2.25v-.5zM9.75 5c.41 0 .75.34.75.75v6.69l2.97-2.97a.75.75 0 111.06 1.06l-4.25 4.25c-.3.3-.77.3-1.06 0l-4.25-4.25a.75.75 0 111.06-1.06L9 12.44V5.75c0-.41.34-.75.75-.75zM3.5 17.75c0-.97.78-1.75 1.75-1.75h9c.97 0 1.75.78 1.75 1.75v.5a.75.75 0 01-1.5 0v-.5a.25.25 0 00-.25-.25h-9a.25.25 0 00-.25.25v.5a.75.75 0 01-1.5 0v-.5z"/>
    </svg>);
}
export default ArrowBetweenDownIcon;
