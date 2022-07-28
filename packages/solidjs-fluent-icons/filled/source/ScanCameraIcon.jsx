import { splitProps } from "solid-js";
function ScanCameraIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6.25C3 4.45 4.46 3 6.25 3H7.6a.75.75 0 110 1.5H6.25c-.97 0-1.75.78-1.75 1.75V7.6a.75.75 0 11-1.5 0V6.25zm8.65-2.5c0-.41.34-.75.75-.75h1.35C15.55 3 17 4.46 17 6.25V7.6a.75.75 0 01-1.5 0V6.25c0-.97-.78-1.75-1.75-1.75H12.4a.75.75 0 01-.75-.75zm-7.9 7.9c.41 0 .75.34.75.75v1.35c0 .97.78 1.75 1.75 1.75H7.6a.75.75 0 010 1.5H6.25A3.25 3.25 0 013 13.75V12.4c0-.41.34-.75.75-.75zm12.5 0c.41 0 .75.34.75.75v1.35c0 1.8-1.46 3.25-3.25 3.25H12.4a.75.75 0 010-1.5h1.35c.97 0 1.75-.78 1.75-1.75V12.4c0-.41.34-.75.75-.75zM10 11a1 1 0 100-2 1 1 0 000 2zm-4 1V9a1 1 0 011-1h1l.7-1.05a1 1 0 01.84-.45h.92a1 1 0 01.84.45L12 8h1a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1zm6-2a2 2 0 10-4 0 2 2 0 004 0z"/>
    </svg>);
}
export default ScanCameraIcon;
