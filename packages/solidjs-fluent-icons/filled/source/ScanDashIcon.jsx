import { splitProps } from "solid-js";
function ScanDashIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.25 3A3.25 3.25 0 003 6.25V7.6a.75.75 0 101.5 0V6.25c0-.97.78-1.75 1.75-1.75H7.6a.75.75 0 100-1.5H6.25zm6.15 0a.75.75 0 000 1.5h1.35c.97 0 1.75.78 1.75 1.75V7.6a.75.75 0 001.5 0V6.25C17 4.45 15.54 3 13.75 3H12.4zm-7.9 9.4a.75.75 0 00-1.5 0v1.35C3 15.55 4.46 17 6.25 17H7.6a.75.75 0 000-1.5H6.25c-.97 0-1.75-.78-1.75-1.75V12.4zm12.5 0a.75.75 0 00-1.5 0v1.35c0 .97-.78 1.75-1.75 1.75H12.4a.75.75 0 000 1.5h1.35c1.8 0 3.25-1.46 3.25-3.25V12.4zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"/>
    </svg>);
}
export default ScanDashIcon;
