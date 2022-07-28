import { splitProps } from "solid-js";
function ArrowWrapOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l.98.98A.75.75 0 003.75 5h.54l3.5 3.5H6.25a3.25 3.25 0 100 6.5h8.04l.71.7a.75.75 0 00.8.8l1.35 1.35a.5.5 0 00.7-.7l-15-15zM12.8 13.5H6.25a1.75 1.75 0 110-3.5h3.04l3.5 3.5z"/>
  <path d="M13.75 8.5h-3.13l1.5 1.5h1.63a3.25 3.25 0 000-6.5H5.62L7.12 5h6.63a1.75 1.75 0 110 3.5z"/>
  <path d="M17.34 15.22l-2.33-2.33a.75.75 0 011.27-.67l1.5 1.5c.3.3.3.77 0 1.06l-.44.44z"/>
    </svg>);
}
export default ArrowWrapOffIcon;
