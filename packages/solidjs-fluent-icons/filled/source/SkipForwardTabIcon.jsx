import { splitProps } from "solid-js";
function SkipForwardTabIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.09 7.97C4.2 6.57 6.07 4.89 8.35 4.4c1.9-.42 4.25-.04 6.86 2.35H12.5a.75.75 0 100 1.5H17c.41 0 .75-.34.75-.75v-4a.75.75 0 00-1.5 0v2.17c-2.92-2.68-5.75-3.28-8.22-2.74-2.76.6-4.9 2.58-6.12 4.1a.75.75 0 001.18.94zm3.41 2.78c-.97 0-1.75.78-1.75 1.75v3c0 .97.78 1.75 1.75 1.75h7c.97 0 1.75-.78 1.75-1.75v-3c0-.97-.78-1.75-1.75-1.75h-7zm-.25 1.75c0-.14.11-.25.25-.25h7c.14 0 .25.11.25.25v3c0 .14-.11.25-.25.25h-7a.25.25 0 01-.25-.25v-3z"/>
    </svg>);
}
export default SkipForwardTabIcon;
