import { splitProps } from "solid-js";
function TextWholeWordIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.5 15a.5.5 0 00.5-.5v-.4a2.76 2.76 0 002 .9 3.28 3.28 0 003-3.5A3.28 3.28 0 0014 8a2.77 2.77 0 00-2 .9V4a.5.5 0 00-1 0v10.5a.5.5 0 00.5.5zM14 9a2.29 2.29 0 012 2.5 2.29 2.29 0 01-2 2.5 2.29 2.29 0 01-2-2.5A2.29 2.29 0 0114 9zm-9.13 5.88a3.72 3.72 0 003.13-.8v.42a.5.5 0 001 0v-4.04a2.45 2.45 0 00-1.28-2.4 3.88 3.88 0 00-1.86-.37c-.55.01-1.09.14-1.58.36a.5.5 0 00.44.9c.37-.17.77-.25 1.17-.26.48-.03.95.06 1.39.26A1.35 1.35 0 018 10.27a5.73 5.73 0 00-1.4-.25 3.92 3.92 0 00-2.38.56 2.36 2.36 0 00.65 4.3zm-.1-3.46a2.93 2.93 0 011.78-.4c.5.02.98.13 1.45.3v1.47a3.23 3.23 0 01-2.87 1.13 1.36 1.36 0 01-.35-2.5zM19 16v.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 16.5V16a.5.5 0 011 0v.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V16a.5.5 0 011 0z"/>
    </svg>);
}
export default TextWholeWordIcon;
