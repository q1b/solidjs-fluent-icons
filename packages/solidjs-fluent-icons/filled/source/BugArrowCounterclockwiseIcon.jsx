import { splitProps } from "solid-js";
function BugArrowCounterclockwiseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 3.5a.5.5 0 00-1 0v2A1.5 1.5 0 0114.5 7H14a3 3 0 00-2.31-2.92A2 2 0 0012 3v-.5a.5.5 0 00-1 0V3a1 1 0 01-2 0v-.5a.5.5 0 10-1 0V3c0 .38.1.76.31 1.08A3 3 0 006 7h-.5A1.5 1.5 0 014 5.5v-2a.5.5 0 10-1 0v2A2.5 2.5 0 005.5 8H6v1.5H2.5a.5.5 0 100 1H6V12h-.5A2.5 2.5 0 003 14.5v2a.5.5 0 001 0v-2A1.5 1.5 0 015.5 13H6a3.99 3.99 0 003.59 3.96A5.49 5.49 0 0114 9.02V8h.5A2.5 2.5 0 0017 5.5v-2zM14.5 10a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.25a2.74 2.74 0 01-2.05-.92.5.5 0 11.75-.66 1.75 1.75 0 10.4-2.67h.4a.5.5 0 010 1h-1.5a.5.5 0 01-.5-.63V12a.5.5 0 011 0v.2a2.75 2.75 0 111.5 5.05z"/>
    </svg>);
}
export default BugArrowCounterclockwiseIcon;
