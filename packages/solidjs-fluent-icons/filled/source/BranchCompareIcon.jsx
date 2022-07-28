import { splitProps } from "solid-js";
function BranchCompareIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.15 6.85a.5.5 0 00.7-.7L10.71 5h1.79A2.5 2.5 0 0115 7.5V12a3 3 0 101 .17V7.5A3.5 3.5 0 0012.5 4h-1.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2zM5 8a3 3 0 10-1-.17v4.67A3.5 3.5 0 007.5 16h1.8l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L9.29 15H7.5A2.5 2.5 0 015 12.5V8z"/>
    </svg>);
}
export default BranchCompareIcon;
