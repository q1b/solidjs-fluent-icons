import { splitProps } from "solid-js";
function FilmstripIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zM3 6a1 1 0 011-1h1v2H3V6zm0 7h2v2H4a1 1 0 01-1-1v-1zm2-1H3v-1.5h2V12zm0-2.5H3V8h2v1.5zM16 15h-1v-2h2v1a1 1 0 01-1 1zm1-4.5V12h-2v-1.5h2zM17 8v1.5h-2V8h2zm0-2v1h-2V5h1a1 1 0 011 1z"/>
    </svg>);
}
export default FilmstripIcon;
