import { splitProps } from "solid-js";
function DocumentMultipleSyncIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.7a5.5 5.5 0 016.8 6.8h2.7c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 019 6.5zM13.06 18H9.74c.26-.3.48-.64.66-1H13a3 3 0 003-3V8a1 1 0 011 1v5.06A3.94 3.94 0 0113.06 18zM10 6.5V2.25L14.75 7H10.5a.5.5 0 01-.5-.5zm-9 8a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H6a.5.5 0 010-1h.47a1.99 1.99 0 00-2.38.34.5.5 0 01-.71-.71A3 3 0 017 12.15V12c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 014 16.85V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 010 1h-.47a1.99 1.99 0 002.38-.34.5.5 0 01.71.71 3 3 0 01-1 .66z"/>
    </svg>);
}
export default DocumentMultipleSyncIcon;
