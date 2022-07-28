import { splitProps } from "solid-js";
function SearchVisualIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6.25C3 4.45 4.46 3 6.25 3h1a.75.75 0 010 1.5h-1c-.97 0-1.75.78-1.75 1.75v1a.75.75 0 01-1.5 0v-1zm14 7.5c0 1.8-1.46 3.25-3.25 3.25h-1a.75.75 0 010-1.5h1c.97 0 1.75-.78 1.75-1.75v-1a.75.75 0 011.5 0v1zm0-7.5C17 4.45 15.54 3 13.75 3h-1a.75.75 0 000 1.5h1c.97 0 1.75.78 1.75 1.75v1a.75.75 0 001.5 0v-1zM6.25 17A3.25 3.25 0 013 13.75v-1a.75.75 0 011.5 0v1c0 .97.78 1.75 1.75 1.75h1a.75.75 0 010 1.5h-1zM10 12a2 2 0 100-4 2 2 0 000 4zM7 8a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>);
}
export default SearchVisualIcon;
