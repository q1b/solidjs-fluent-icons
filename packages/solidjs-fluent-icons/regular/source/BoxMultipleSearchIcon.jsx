import { splitProps } from "solid-js";
function BoxMultipleSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.42 2.38a3 3 0 012.16 0l3.46 1.33c.58.22.96.78.96 1.4v7.78c0 .07 0 .15-.02.22a4.48 4.48 0 00-.98-2.44V5.11a.5.5 0 00-.32-.47l-3.46-1.33a2 2 0 00-1.44 0L8.32 4.64a.5.5 0 00-.32.47v1.1a4 4 0 00-1 0V5.1c0-.62.38-1.18.96-1.4l3.46-1.33zm1.18 6.7a1.5 1.5 0 00-.56-.37L8.58 7.38a3 3 0 00-2.16 0L2.96 8.7A1.5 1.5 0 002 10.1v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 002.16 0l1.94-.75c-.27-.23-.5-.5-.71-.8l-1.6.62a2 2 0 01-1.43 0l-3.46-1.33a.5.5 0 01-.32-.47V10.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 011.44 0l3.16 1.22c.38-.2.79-.35 1.22-.44zm-1.9.9a.5.5 0 00-.25.03L7.5 11.14 4.55 10a.5.5 0 10-.35.93L7 12.02v2.49a.5.5 0 001 0V12l1.5-.57c.29-.57.7-1.07 1.2-1.46zM15.45 5a.5.5 0 11.35.93L13.04 7a1.5 1.5 0 01-1.08 0L9.2 5.94A.5.5 0 019.55 5l2.77 1.06a.5.5 0 00.36 0l2.77-1.06zm.85 10.59a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 00.7-.7L16.3 15.6zm-.3-2.1a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
    </svg>);
}
export default BoxMultipleSearchIcon;
